import { MapPin, ArrowUp, ArrowDown } from "lucide-react";
import WeatherIcon from "./WeatherIcon";

import type {
  CurrentWeather,
  DailyForecast,
} from "../../types/weather";

type MainTempProps = {
  weather: CurrentWeather | null;
  todayForecast: DailyForecast | null;
};

export default function MainTemp({weather, todayForecast}: MainTempProps) {
  
  const temperature = weather ? `${Math.round(weather.main.temp)}°C` : "—";
  const description = weather?.weather[0]?.description ?? "Loading weather...";
  const formattedDescription = description.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const localDate = weather ? new Date((weather.dt + weather.timezone) * 1000).toLocaleDateString("en-US", { weekday: "long", month: "long",  day: "numeric", timeZone: "UTC",}) : "Loading date...";
  // The 3-hour forecast may begin tomorrow, leaving no entries for today.
  // Fall back to the current weather API's reported temperature range.
  const high = weather
    ? Math.round(todayForecast
        ? Math.max(weather.main.temp, todayForecast.max)
        : weather.main.temp_max)
    : null;
  const low = weather
    ? Math.round(todayForecast
        ? Math.min(weather.main.temp, todayForecast.min)
        : weather.main.temp_min)
    : null;

  return (
    <article className="flex h-full min-h-[185px] flex-col justify-between rounded-2xl bg-linear-to-br from-blue-800 via-blue-600 to-sky-500 p-4 text-white shadow-sm">

      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <MapPin size={17} />

            <h2 className="text-base font-semibold">
              {weather
                ? `${weather.name}, ${weather.sys.country}`
                : "Loading city..."}
            </h2>
          </div>

          <p className="mt-1 text-xs text-blue-100">
            {localDate}
          </p>
        </div>

        <WeatherIcon
          code={weather?.weather[0]?.icon}
          size={48}
          className="shrink-0"/>
      </div>

      <div>
        <h3 className="text-[44px] leading-none font-bold tracking-tight">
          {temperature}
        </h3>

        <p className="mt-2 text-sm font-medium">
          {formattedDescription}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
          <span
            className="flex items-center gap-1"
            title={todayForecast ? "Today’s forecast high" : "Current reported maximum (not the full-day high)"}
          >
            <ArrowUp size={15} />
            {high === null ? "—" : `${high}°C`}
          </span>

          <span
            className="flex items-center gap-1"
            title={todayForecast ? "Today’s forecast low" : "Current reported minimum (not the full-day low)"}
          >
            <ArrowDown size={15} />
            {low === null ? "—" : `${low}°C`}
          </span>
          {weather && !todayForecast && (
            <span className="text-blue-100">Current range</span>
          )}
        </div>
      </div>
    </article>
  );
}
