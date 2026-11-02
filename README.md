# Weather App v2

### A modern weather dashboard built with Next.js, React, TypeScript, and Tailwind CSS.

Weather App v2 is an improved and redesigned version of my original Weather App.

This project was created to strengthen my front-end development skills, explore modern web technologies, and build a more polished, responsive, and functional weather application.

The application integrates the OpenWeatherMap API to display real-time weather conditions, upcoming forecasts, and temperature trends.

## Features

- **City Search** — Search for cities around the world.
- **Current Weather** — View temperature, weather conditions, and location information.
- **Weather Details** — Check feels-like temperature, humidity, wind speed, and atmospheric pressure.
- **Hourly Forecast** — Explore upcoming weather conditions in 3-hour intervals.
- **5-Day Forecast** — View daily weather predictions with estimated minimum and maximum temperatures.
- **Temperature Trends** — Visualize forecast temperature changes using a dynamic SVG chart.
- **Persistent City Selection** — Automatically load the last searched city using localStorage.
- **Responsive Design** — A clean dashboard designed for different screen sizes.
- **API Error Handling** — Handle invalid locations and external API errors.
- **API Caching** — Reduce unnecessary requests to OpenWeatherMap.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Application framework and API routes |
| React | Component-based user interface |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Styling and responsive layouts |
| Lucide React | Interface icons |
| React Icons | Brand icons |
| OpenWeatherMap API | Weather information and forecasts |

## Getting Started

### 1. Clone the repository

`git clone https://github.com/mntandrei/weater-app-v2.git`

### 2. Navigate into the project

`cd weater-app-v2`

### 3. Install dependencies

`npm install`

### 4. Configure environment variables

Create a `.env.local` file in the root directory.

Add the following environment variable:

`OPENWEATHER_API_KEY=your_openweathermap_api_key`

You can obtain an API key from [OpenWeatherMap](https://openweathermap.org/api).

**Important:** Never commit your actual API key to GitHub.

### 5. Run the development server

`npm run dev`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

The application uses Next.js API Route Handlers to communicate securely with OpenWeatherMap.

1. The user searches for a city.
2. The application sends a request to its internal weather API.
3. The server uses OpenWeatherMap Geocoding to resolve the city's coordinates.
4. Current weather and forecast data are fetched using those coordinates.
5. React components receive and display the weather information.
6. The selected city is saved locally for future visits.

The OpenWeatherMap API key remains on the server and is not exposed to the browser.

## From Weather App v1 to v2

Weather App v2 represents the next stage in my front-end development journey.

My original Weather App helped me understand the basics of working with weather APIs and building functional user interfaces.

With version 2, I focused on improving:

- Application structure and component reusability.
- TypeScript integration.
- UI/UX design and responsiveness.
- API integration and error handling.
- Dynamic data visualization.
- Code readability and maintainability.

**Explore the original version:**

[Weather App v1 — Live Demo](https://weather-app-seven-theta-62.vercel.app/)

[Weather App v1 — Source Code](https://github.com/mntandrei/weather-app)

## AI-Assisted Learning

During the development of Weather App v2, I used AI as a learning and guidance tool.

AI helped me understand programming concepts, explore possible solutions, debug errors, and learn better development practices.

My goal was not only to create a working application, but also to improve my understanding of React, TypeScript, API integration, and application architecture.

This project reflects my ongoing learning process, including the guidance and code assistance I received while building it.

## Future Improvements

- More detailed weather information.
- Additional forecast visualizations.
- Improved loading states and error handling.
- Accessibility enhancements.
- Further UI/UX refinements.

## Author

**Andrei — Front-End Developer**

I built this project as part of my journey toward becoming a better front-end developer.

GitHub: [@mntandrei](https://github.com/mntandrei)

---

*Weather App v2 — Learning, building, and improving one project at a time.*
