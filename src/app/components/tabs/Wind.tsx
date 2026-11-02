import { Wind as WindIcon } from "lucide-react";

type WindProps = {
  speed: number | null;
};

export default function Wind({speed}: WindProps) {
  return (
    <article className="flex h-full min-h-[92px] items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50">
        <WindIcon
          size={21}
          className="text-sky-500"/>
      </div>

      <div className="min-w-0">
        <p className="text-xs text-slate-500">
          Wind
        </p>

        <h3 className="mt-1 whitespace-nowrap text-[15px] font-bold text-slate-900 sm:text-lg">
          {speed === null ? "—" : `${Math.round(speed)} km/h`}
        </h3>
      </div>
    </article>
  );
}
