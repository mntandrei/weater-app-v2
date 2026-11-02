import { NextRequest, NextResponse } from "next/server";

import type { WeatherApiResponse } from "../../types/weather";

type GeoLocation = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  local_names?: {
    ro?: string;
  };
};

type CacheEntry = {
  data: WeatherApiResponse;
  expiresAt: number;
};

const CACHE_DURATION = 10 * 60 * 1000;

const weatherCache = new Map<string, CacheEntry>();

const pendingRequests = new Map<string,Promise<WeatherApiResponse>>();
class WeatherApiError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
    this.name = "WeatherApiError";
  }
}

async function checkResponse(
  response: Response,
  service: string
) {
  if (response.ok) return;

  const body = await response.json().catch(() => null);

  console.error(`${service} failed`, {
    status: response.status,
    message: body?.message,
  });

  if (response.status === 429) {
    throw new WeatherApiError(
      "OpenWeatherMap rate limit exceeded. Try again later.",
      429
    );
  }

  if (response.status === 401) {
    throw new WeatherApiError(
      "Invalid or inactive OpenWeatherMap API key.",
      502
    );
  }

  throw new WeatherApiError(
    body?.message || `${service} request failed`,
    response.status === 404 ? 404 : 502
  );
}

async function fetchWeather(
  city: string,
  apiKey: string
): Promise<WeatherApiResponse> {
  // Normalize Romanian diacritics
  const normalizedCity = city
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const variants = [...new Set([city, normalizedCity])];

  let location: GeoLocation | undefined;

  for (const name of variants) {
    const geoParams = new URLSearchParams({
      q: name,
      limit: "1",
      appid: apiKey,
    });

    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?${geoParams}`,
      { next: { revalidate: 600 } }
    );

    await checkResponse(geoResponse, "Geocoding");

    const locations: GeoLocation[] =
      await geoResponse.json();

    if (locations.length > 0) {
      location = locations[0];
      break;
    }
  }

  if (!location) {
    throw new WeatherApiError("City not found", 404);
  }

  const params = new URLSearchParams({
    lat: String(location.lat),
    lon: String(location.lon),
    appid: apiKey,
    units: "metric",
    lang: "en",
  });

  // Fetch current weather and 5-day forecast
  const [currentResponse, forecastResponse] =
    await Promise.all([
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?${params}`,
        { next: { revalidate: 900 } }
      ),
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?${params}`,
        { next: { revalidate: 900 } }
      ),
    ]);

  await checkResponse(currentResponse, "Current Weather");
  await checkResponse(forecastResponse, "Forecast");

  const [current, forecast] = await Promise.all([
    currentResponse.json() as Promise<
      WeatherApiResponse["current"]>,
    forecastResponse.json() as Promise<
      WeatherApiResponse["forecast"]>,
  ]);

  return {
    current: {
      ...current,
      name: location.local_names?.ro ?? location.name,
      sys: {
        ...current.sys,
        country: location.country,
      },
    },
    forecast,
  };
}

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams
    .get("city")
    ?.trim();

  if (!city || city.length > 100) {
    return NextResponse.json(
      { error: "A valid city name is required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenWeather API key is missing" },
      { status: 500 }
    );
  }

  const cacheKey = city.toLocaleLowerCase("ro-RO");
  const cached = weatherCache.get(cacheKey);

  if (cached && cached.expiresAt > Date.now()) {
    console.log("Weather cache hit:", city);

    return NextResponse.json(cached.data);
  }

  try {
    let pending = pendingRequests.get(cacheKey);

    if (!pending) {
      pending = fetchWeather(city, apiKey);
      pendingRequests.set(cacheKey, pending);
    }

    const data = await pending;

    weatherCache.set(cacheKey, {
      data,
      expiresAt: Date.now() + CACHE_DURATION,
    });

    if (weatherCache.size > 100) {
      const oldestKey = weatherCache.keys().next().value;

      if (oldestKey) {
        weatherCache.delete(oldestKey);
      }
    }

    return NextResponse.json(data);

  } catch (error) {
    if (error instanceof WeatherApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status }
      );
    }

    console.error("Weather server error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );

  } finally {
    pendingRequests.delete(cacheKey);
  }
}
