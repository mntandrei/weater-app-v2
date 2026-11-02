import {CalendarDays, Sun, Cloud, CloudRain, CloudSun} from "lucide-react";

const days = [
  {
    day: "Mon",
    max: "22°",
    min: "12°",
    icon: Sun,
    color: "text-amber-400",
  },
  {
    day: "Tue",
    max: "18°",
    min: "11°",
    icon: CloudRain,
    color: "text-blue-500",
  },
  {
    day: "Wed",
    max: "17°",
    min: "10°",
    icon: Cloud,
    color: "text-slate-400",
  },
  {
    day: "Thu",
    max: "20°",
    min: "11°",
    icon: CloudSun,
    color: "text-amber-400",
  },
  {
    day: "Fri",
    max: "23°",
    min: "13°",
    icon: Sun,
    color: "text-amber-400",
  },
  {
    day: "Sat",
    max: "24°",
    min: "14°",
    icon: Sun,
    color: "text-amber-400",
  },
  {
    day: "Sun",
    max: "21°",
    min: "13°",
    icon: CloudSun,
    color: "text-amber-400",
  },
];

export default function SevenDaysForecast() {
  return (
    <article className="flex h-full min-h-[172px] min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

      <div className="mb-2 flex items-center gap-2">
        <CalendarDays
          size={18}
          className="shrink-0 text-blue-600"/>

        <h2 className="text-sm font-semibold text-slate-900">
          7-Day Forecast
        </h2>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-7 gap-1.5">
        {days.map(({ day, max, min, icon: Icon, color }) => (
          <div
            key={day}
            className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-lg bg-slate-50 px-0.5 py-2">
            <span className="text-[11px] font-medium text-slate-700">
              {day}
            </span>

            <Icon
              size={22}
              className={color}/>

            <div className="whitespace-nowrap text-[10px] font-semibold">
              <span className="text-slate-900">
                {max}
              </span>
              <span className="text-slate-400">
                {" / "}{min}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}