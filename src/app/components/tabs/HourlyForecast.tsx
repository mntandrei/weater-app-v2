import { Clock3, CloudSun, Sun, Cloud } from "lucide-react";

const hours = [
  { time: "Now", temp: "18°", icon: CloudSun },
  { time: "11 AM", temp: "19°", icon: CloudSun },
  { time: "12 PM", temp: "21°", icon: Sun },
  { time: "1 PM", temp: "22°", icon: Sun },
  { time: "2 PM", temp: "22°", icon: Sun },
  { time: "3 PM", temp: "21°", icon: Cloud },
];

export default function HourlyForecast() {
  return (
    <article className="flex h-full min-h-[172px] min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <Clock3 size={18} className="shrink-0 text-blue-600" />

          <h2 className="text-sm font-semibold text-slate-900">
            Hourly Forecast
          </h2>
        </div>

        <span className="whitespace-nowrap text-[11px] text-blue-600">
          Next 24 Hours
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-6 gap-1.5">
        {hours.map(({ time, temp, icon: Icon }, index) => (
          <div
            key={time}
            className={`flex min-w-0 flex-col items-center justify-center gap-2 rounded-lg px-1 py-2 ${
              index === 0 ? "bg-blue-50" : "bg-slate-50"}`}>
            <span className="text-[11px] text-slate-500">
              {time}
            </span>

            <Icon
              size={23}
              className="text-amber-400"/>

            <span className="text-sm font-semibold text-slate-900">
              {temp}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}