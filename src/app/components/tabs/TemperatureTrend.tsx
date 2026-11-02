import { ChartNoAxesColumnIncreasing } from "lucide-react";

const timeLabels = [
  "9 AM",
  "11 AM",
  "1 PM",
  "3 PM",
  "5 PM",
  "7 PM",
];

export default function TemperatureTrend() {
  return (
    <article className="flex h-full min-h-[134px] flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ChartNoAxesColumnIncreasing
            size={18}
            className="text-blue-600"/>

          <h2 className="text-sm font-semibold text-slate-900">
            Temperature Trend
          </h2>
        </div>

        <span className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-medium text-white">
          Today
        </span>
      </div>

      <div className="min-h-0 flex-1">
        <svg
          viewBox="0 0 700 80"
          preserveAspectRatio="none"
          className="block h-[64px] w-full"
          role="img"
          aria-label="Sample temperature trend">
          <defs>
            <linearGradient
              id="temperatureArea"
              x1="0"
              y1="0"
              x2="0"
              y2="1">
              <stop
                offset="0%"
                stopColor="#3b82f6"
                stopOpacity="0.22"/>

              <stop
                offset="100%"
                stopColor="#3b82f6"
                stopOpacity="0"/>
            </linearGradient>
          </defs>

          {[15, 40, 65].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="700"
              y2={y}
              stroke="#e2e8f0"
              strokeWidth="1"/>
          ))}

          <path
            d="M10 65 C120 60 130 43 240 40 S370 12 470 18 S600 38 690 55 L690 80 L10 80 Z"
            fill="url(#temperatureArea)"/>

          <path
            d="M10 65 C120 60 130 43 240 40 S370 12 470 18 S600 38 690 55"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"/>
        </svg>

        <div className="mt-1 flex justify-between gap-1">
          {timeLabels.map((time) => (
            <span
              key={time}
              className="text-[10px] text-slate-400">
              {time}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}