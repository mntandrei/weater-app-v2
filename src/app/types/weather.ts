
export type WeatherCondition = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CurrentWeather = {
  name: string;
  dt: number;
  timezone: number;

  sys: {
    country: string;
  };

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };

  wind: {
    speed: number;
  };

  weather: WeatherCondition[];
};

export type ForecastItem = {
  dt: number;

  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };

  weather: WeatherCondition[];
  pop: number;
};

export type WeatherApiResponse = {
  current: CurrentWeather;

  forecast: {
    list: ForecastItem[];

    city: {
      timezone: number;
    };
  };
};

export type DailyForecast = {
  dateKey: string;
  min: number;
  max: number;
  icon: string;
};
