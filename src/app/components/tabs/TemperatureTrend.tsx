import { ChartNoAxesColumnIncreasing } from "lucide-react";

import type { ForecastItem } from "../../types/weather";
import { getLocalHour } from "../../lib/weather-utils";

type TemperatureTrendProps = {
  items: ForecastItem[];
  timezoneOffset: number;
};

export default function TemperatureTrend({items, timezoneOffset}: TemperatureTrendProps) {

  const temperatures = items.map((item) => item.main.temp);
  const minTemp = temperatures.length ? Math.min(...temperatures) : 0;
  const maxTemp = temperatures.length ? Math.max(...temperatures) : 0;
  const range = Math.max(maxTemp - minTemp, 1);

  const points = items.map((item, index) => {
    const x = 10 + (index / Math.max(items.length - 1, 1)) * 680;
    const y = maxTemp === minTemp ? 90 : 160 - ((item.main.temp - minTemp) / range) * 135;
    return {x, y, dt: item.dt, temperature: item.main.temp}});

  const linePoints = points.map((point) => `${point.x},${point.y}`).join(" ");

  const areaPoints = points.length ? `${points[0].x},180 ${linePoints} ${points[points.length - 1].x},180`: "";

  return (
    <article
      className="flex h-full min-h-[220px] flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm xl:min-h-0">

      <div className="mb-3 flex shrink-0 items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ChartNoAxesColumnIncreasing
            size={20}
            className="text-blue-600"/>
          <h2 className="text-sm font-semibold text-slate-900">
            Temperature Trend
          </h2>

        </div>
        <span className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-medium text-white">
          3h Steps
        </span>
      </div>

      {points.length === 0 ? (
        <div className="flex flex-1 items-center justify-center text-sm text-slate-400">
          Waiting for temperature data...
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col">
          <svg
            viewBox="0 0 700 180"
            preserveAspectRatio="none"
            className="block h-36 w-full xl:h-auto xl:min-h-0xl:flex-1"
            role="img" aria-label="Temperature forecast trend">

            <defs>
              <linearGradient id="temperatureArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
            </defs>

            {[25, 70, 115, 160].map((y) => (
              <line key={y} x1="0" y1={y} x2="700" y2={y} stroke="#e2e8f0" strokeWidth="1"/>

            ))}

            <polygon points={areaPoints} fill="url(#temperatureArea)"/>
            <polyline points={linePoints} fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

            {points.map((point) => (
              <circle
                key={point.dt}
                cx={point.x}
                cy={point.y}
                r="3.5"
                fill="#ffffff"
                stroke="#3b82f6"
                strokeWidth="2"
              />
            ))}
          </svg>

          <div className="mt-2 flex shrink-0 justify-between gap-1">
            {items.map((item) => (
              <span
                key={item.dt}
                className="text-[11px] text-slate-400">
                {getLocalHour(item.dt, timezoneOffset)}
              </span>
            ))}
          </div>

        </div>
      )}
    </article>
  );
}
