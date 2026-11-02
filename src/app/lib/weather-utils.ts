import type {ForecastItem,DailyForecast} from "../types/weather";

export function getLocalDateKey(timestamp: number, timezoneOffset: number): string {
  return new Date(
    (timestamp + timezoneOffset) * 1000).toISOString().slice(0, 10);
}

export function getLocalHour(timestamp: number,timezoneOffset: number): string {
  return new Date(
    (timestamp + timezoneOffset) * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    timeZone: "UTC",
  });
}

export function groupForecastByDay(items: ForecastItem[],timezoneOffset: number): DailyForecast[] {
  const groups = new Map<
    string,
    DailyForecast & { distanceFromNoon: number }
  >();

  for (const item of items) {
    const localDate = new Date(
      (item.dt + timezoneOffset) * 1000
    );

    const dateKey = localDate.toISOString().slice(0, 10);
    const distanceFromNoon = Math.abs(localDate.getUTCHours() - 12);
    const existing = groups.get(dateKey);

    if (!existing) {
      groups.set(dateKey, {
        dateKey,
        min: item.main.temp,
        max: item.main.temp,
        icon: item.weather[0]?.icon ?? "03d",
        distanceFromNoon,
      });

      continue;
    }

    existing.min = Math.min(
      existing.min,
      item.main.temp
    );

    existing.max = Math.max(
      existing.max,
      item.main.temp
    );

    if (distanceFromNoon < existing.distanceFromNoon) {
      existing.icon = item.weather[0]?.icon ?? "03d";
      existing.distanceFromNoon = distanceFromNoon;
    }
  }

  return Array.from(groups.values()).slice(0, 5).map(({ dateKey, min, max, icon }) => ({dateKey, min, max, icon}));
}
