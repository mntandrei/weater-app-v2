import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search
        size={17}
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
      />

      <input
        type="search"
        placeholder="Search for a city..."
        aria-label="Search for a city"
        className="h-10 w-full rounded-xl border border-slate-200 bg-white pr-3 pl-10 text-sm text-slate-800 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400"
      />
    </div>
  );
}