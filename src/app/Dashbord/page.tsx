import MainTemp from "../components/tabs/MainTemp";
import FeelsLike from "../components/tabs/FeelsLike";
import Humidity from "../components/tabs/Humidity";
import Wind from "../components/tabs/Wind";
import Pressure from "../components/tabs/Pressure";
import HourlyForecast from "../components/tabs/HourlyForecast";
import SevenDaysForecast from "../components/tabs/SevenDaysForecast";
import TemperatureTrend from "../components/tabs/TemperatureTrend";
import SearchBar from "../components/dashboard/SearchBar";

export default function Dashboard() {
  return (
    <section className="min-h-dvh bg-slate-50 px-3 py-3 pb-20 md:ml-56 md:px-4 md:pb-3">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3">

        <header className="flex h-10 items-center justify-end">
          <SearchBar />
        </header>

        <div className="grid gap-3 xl:h-[202px] xl:grid-cols-2">
          <MainTemp />

          <div className="grid grid-cols-2 gap-2.5 xl:grid-rows-2">
            <FeelsLike />
            <Humidity />
            <Wind />
            <Pressure />
          </div>
        </div>

        <div className="grid gap-3 xl:h-[182px] xl:grid-cols-2">
          <HourlyForecast />
          <SevenDaysForecast />
        </div>

        <div className="xl:h-[142px]">
          <TemperatureTrend />
        </div>

      </div>
    </section>
  );
}