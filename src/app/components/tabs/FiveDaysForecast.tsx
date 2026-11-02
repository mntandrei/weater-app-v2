import { CalendarDays } from "lucide-react";
import WeatherIcon from "./WeatherIcon";
import type { DailyForecast } from "../../types/weather";

type FiveDaysForecastProps = {
  days: DailyForecast[];
};

export default function FiveDaysForecast({days}: FiveDaysForecastProps) {
  return (
    <article
      className="flex h-full min-h-[172px] min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

      <div className="mb-2 flex items-center gap-2">
        <CalendarDays
          size={18}
          className="shrink-0 text-blue-600"/>

        <h2 className="text-sm font-semibold text-slate-900">
          5-Day Forecast
        </h2>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-5 gap-1.5">
        {days.length === 0 ? (
          <div className="col-span-5 flex items-center justify-center text-xs text-slate-400">
            Waiting for forecast...
          </div>
        ) : (
          days.slice(0, 5).map((day) => {
            const dayName = new Date(
              `${day.dateKey}T12:00:00Z`
            ).toLocaleDateString("en-US", {
              weekday: "short",
              timeZone: "UTC",
            });

            return (
              <div
                key={day.dateKey}
                className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-lg bg-slate-50 px-0.5 py-2 transition-colors hover:bg-blue-50">

                <span className="text-[11px] font-medium text-slate-700">
                  {dayName}
                </span>

                <WeatherIcon
                  code={day.icon}
                  size={23}/>

                <div className="whitespace-nowrap text-[10px] font-semibold">
                  <span className="text-slate-900">
                    {Math.round(day.max)}°
                  </span>

                  <span className="text-slate-400">
                    {" / "}
                    {Math.round(day.min)}°
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </article>
  );
}
