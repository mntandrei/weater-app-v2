"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  onSearch: (city: string) => void;
};

export default function SearchBar({onSearch}: SearchBarProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const city =
          formData.get("city")?.toString().trim() ?? "";

        if (!city) return;

        onSearch(city)
      }}

      className="flex h-10 w-full max-w-xs items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 shadow-sm transition-colors focus-within:border-blue-400">
      <button
        type="submit"
        aria-label="Search for city"
        className="shrink-0 cursor-pointer text-slate-400 hover:text-blue-600">
        <Search size={18} />
      </button>

      <input
        name="city"
        type="search"
        placeholder="Search for a city..."
        aria-label="City"
        className="w-full min-w-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"/>
    </form>
  );
}
