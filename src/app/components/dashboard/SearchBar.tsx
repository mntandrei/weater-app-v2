"use client";
import { Search } from "lucide-react";

type SearchBarProps = {
  onSearch?: (city: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {

  const handleSearch = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const rawCity = new FormData(event.target);
    const clearCity = rawCity.get("city")?.toString().trim() || "";

    if (!clearCity) {
      return;
    }
    console.log("Searching for city:", clearCity);
    if (onSearch) {
      onSearch(clearCity);
    }
  }

  return (
    <div className="relative w-full sm:max-w-xs">
      <Search
        size={17}
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"/>

      <form onSubmit={handleSearch}>
        <input
          type="search"
          name="city"
          placeholder="Search for a city..."
          aria-label="Search for a city"
          className="h-10 w-full rounded-xl border border-slate-200 bg-white pr-3 pl-10 text-sm text-slate-800 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400"
        />
      </form>
    </div>
  );
}