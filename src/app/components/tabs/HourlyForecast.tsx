import { Clock3 } from "lucide-react";
import WeatherIcon from "./WeatherIcon";
import type { ForecastItem } from "../../types/weather";
import { getLocalHour } from "../../lib/weather-utils";

type HourlyForecastProps = {
  items: ForecastItem[];
  timezoneOffset: number;
};

export default function HourlyForecast({items, timezoneOffset}: HourlyForecastProps) {
  return (
    <article className="flex h-full min-h-[172px] min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <Clock3
            size={18}
            className="shrink-0 text-blue-600"/>

          <h2 className="text-sm font-semibold text-slate-900">
            3-Hour Forecast
          </h2>
        </div>

        <span className="whitespace-nowrap text-[11px] text-blue-600">
          Every 3 Hours
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-6 gap-1.5">
        {items.length === 0 ? (
          <div className="col-span-6 flex items-center justify-center text-xs text-slate-400">
            Waiting for forecast...
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={item.dt}
              className={`flex min-w-0 flex-col items-center justify-center gap-2 rounded-lg px-1 py-2 ${
                index === 0 ? "bg-blue-50" : "bg-slate-50"}`}>
              <span className="whitespace-nowrap text-[11px] text-slate-500">
                {getLocalHour(item.dt, timezoneOffset)}
              </span>

              <WeatherIcon
                code={item.weather[0]?.icon}
                size={23}/>

              <span className="text-sm font-semibold text-slate-900">
                {Math.round(item.main.temp)}°
              </span>
            </div>
          ))
        )}
      </div>
    </article>
  );
}
