import {CloudSun, MapPin, ArrowUp, ArrowDown} from "lucide-react";

export default function MainTemp() {
  return (
    <article className="flex h-full min-h-[185px] flex-col justify-between rounded-2xl bg-linear-to-br from-blue-800 via-blue-600 to-sky-500 p-4 text-white shadow-sm">

      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <MapPin size={17} />
            <h2 className="text-base font-semibold">
              Bucharest, RO
            </h2>
          </div>

          <p className="mt-1 text-xs text-blue-100">
            Monday, November 2
          </p>
        </div>

        <CloudSun
          size={48}
          className="shrink-0 text-yellow-200"
        />
      </div>

      <div>
        <h3 className="text-[44px] leading-none font-bold tracking-tight">
          18°C
        </h3>

        <p className="mt-2 text-sm font-medium">
          Partly Cloudy
        </p>

        <div className="mt-3 flex gap-4 text-xs">
          <span className="flex items-center gap-1">
            <ArrowUp size={15} />
            22°C
          </span>

          <span className="flex items-center gap-1">
            <ArrowDown size={15} />
            12°C
          </span>
        </div>
      </div>
    </article>
  );
}