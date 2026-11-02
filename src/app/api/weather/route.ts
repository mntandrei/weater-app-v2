import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city")?.trim();

  if (!city) {
    return NextResponse.json(
      { error: "City is required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key is missing" },
      { status: 500 }
    );
  }

  try {

    const params = new URLSearchParams({
      q: city,
      appid: apiKey,
      units: "metric",
      lang: "en",
    });

    const [currentResponse, forecastResponse] =
      await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?${params}`,
          { cache: "no-store" }
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?${params}`,
          { cache: "no-store" }
        ),
      ]);

    if (!currentResponse.ok || !forecastResponse.ok) {
      const notFound = currentResponse.status === 404 || forecastResponse.status === 404;

      return NextResponse.json(
        {
          error: notFound
            ? "City not found"
            : "Failed to fetch weather data",
        },
        { status: notFound ? 404 : 502 }
      );
    }

    const [currentData, forecastData] = await Promise.all([
      currentResponse.json(),
      forecastResponse.json(),
    ]);

    return NextResponse.json({
      current: currentData,
      forecast: forecastData,
    });

  } catch (error) {
    console.error("Weather API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
