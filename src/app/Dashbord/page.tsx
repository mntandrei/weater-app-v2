
"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";

import MainTemp from "../components/tabs/MainTemp";
import FeelsLike from "../components/tabs/FeelsLike";
import Humidity from "../components/tabs/Humidity";
import Wind from "../components/tabs/Wind";
import Pressure from "../components/tabs/Pressure";
import HourlyForecast from "../components/tabs/HourlyForecast";
import FiveDaysForecast from "../components/tabs/FiveDaysForecast";
import TemperatureTrend from "../components/tabs/TemperatureTrend";
import SearchBar from "../components/dashboard/SearchBar";

import type { WeatherApiResponse } from "../types/weather";

import {
  groupForecastByDay,
  getLocalDateKey,
} from "../lib/weather-utils";

export default function Dashboard() {
  // Weather data
  const [weatherData, setWeatherData] =
    useState<WeatherApiResponse | null>(null);

  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Request management
  const latestRequest = useRef(0);
  const initialLoad = useRef(false);

  // Search city
  const handleSearch = useCallback(async (city: string) => {
    const cleanCity = city.trim();

    if (!cleanCity) return;

    const requestId = ++latestRequest.current;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/weather?city=${encodeURIComponent(cleanCity)}`
      );

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => null);

        throw new Error(
          errorData?.error ?? "Failed to load weather"
        );
      }

      const data: WeatherApiResponse =
        await response.json();

      // Ignore older requests
      if (requestId !== latestRequest.current) {
        return;
      }

      // Update all weather cards
      setWeatherData(data);

      // Save last searched city
      localStorage.setItem("lastCity", cleanCity);

    } catch (err) {
      if (requestId !== latestRequest.current) {
        return;
      }

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );

    } finally {
      if (requestId === latestRequest.current) {
        setLoading(false);
      }
    }
  }, []);

  // Load last searched city on first mount
  useEffect(() => {
    if (initialLoad.current) return;

    initialLoad.current = true;

    const savedCity =
      localStorage.getItem("lastCity")?.trim() ||
      "Bucharest";

    void handleSearch(savedCity);
  }, [handleSearch]);

  // Current weather
  const current = weatherData?.current ?? null;

  // Forecast data
  const forecast = weatherData?.forecast.list ?? [];

  const timezoneOffset =
    weatherData?.forecast.city.timezone ?? 0;

  // Group forecast by calendar day
  const dailyForecast = useMemo(() => {
    if (!weatherData) return [];

    return groupForecastByDay(
      weatherData.forecast.list,
      weatherData.forecast.city.timezone
    );
  }, [weatherData]);

  // Get forecast for current day
  const todayForecast = current
    ? dailyForecast.find(
        (day) =>
          day.dateKey ===
          getLocalDateKey(current.dt, current.timezone)
      ) ?? null
    : null;

  return (
    <section
      className="
        min-h-dvh
        bg-slate-50
        px-3
        py-3
        pb-20
        md:ml-56
        md:px-4
        md:pb-3
        xl:h-dvh
        xl:min-h-[680px]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-col
          gap-3
          xl:h-full
          xl:min-h-0
        "
      >
        {/* SEARCH BAR */}
        <header className="relative flex h-10 shrink-0 items-center justify-center">
          <SearchBar onSearch={handleSearch} />

          {loading && (
            <span
              role="status"
              className="absolute right-0 hidden text-xs text-blue-600 sm:block"
            >
              Loading...
            </span>
          )}
        </header>

        {/* API ERROR */}
        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600"
          >
            {error}
          </div>
        )}

        {/* CURRENT WEATHER + STATS */}
        <div className="grid gap-3 xl:h-[202px] xl:shrink-0 xl:grid-cols-2">

          <MainTemp
            weather={current}
            todayForecast={todayForecast}
          />

          <div className="grid grid-cols-2 gap-2.5 xl:grid-rows-2">

            <FeelsLike
              feelsLike={current?.main.feels_like ?? null}
            />

            <Humidity
              humidity={current?.main.humidity ?? null}
            />

            <Wind
              speed={
                current
                  ? current.wind.speed * 3.6
                  : null
              }
            />

            <Pressure
              pressure={current?.main.pressure ?? null}
            />

          </div>
        </div>

        {/* HOURLY + FIVE-DAY FORECAST */}
        <div className="grid gap-3 xl:h-[182px] xl:shrink-0 xl:grid-cols-2">

          <HourlyForecast
            items={forecast.slice(0, 6)}
            timezoneOffset={timezoneOffset}
          />

          <FiveDaysForecast
            days={dailyForecast}
          />

        </div>

        {/* TEMPERATURE TREND */}
        <div className="min-h-[220px] xl:min-h-0 xl:flex-1">

          <TemperatureTrend
            items={forecast.slice(0, 6)}
            timezoneOffset={timezoneOffset}
          />

        </div>

      </div>
    </section>
  );
}
