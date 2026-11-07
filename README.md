# Weather App v2

A modern weather dashboard made with Next.js, React, TypeScript & Tailwind CSS.

This Weather App has been improved from the original Weather App. This project was made to help improve my front-end skills, learn more about modern web technologies and create a more advanced Weather App. This app uses the OpenWeatherMap API to display Current Weather, forecast and Temperature Trends.

## Features

Search for cities across the globe.

Display the Current Weather including temperature, weather and location.

Display detailed weather information including feels like temperature, humidity, wind speed and air pressure.

See the forecast for the next few hours.

View a 5 Day Forecast showing the predicted weather for each day including approximate min/max temperatures.

See a visual representation of forecasted temperature changes using an interactive SVG chart.

Save your last searched city using local storage.

Modern and clean dashboard that is responsive.

Handle errors from invalid locations and API.

Reduce extra requests with API caching.

## Technologies Used

```Technology | Reason |

 Next.js | Used as the framework for the app and for API routes. 

React | Used for the component based UI. 

TypeScript | Helps ensure type safety and clean code. 

Tailwind CSS | Used for styling. 

Lucide React | Icons for the UI. 

React Icons | Icons for brands. 

OpenWeatherMap API | Provides weather information and forecasts.```

## Getting Started

1. Clone repo:

```bash

git clone https://github.com/mntandrei/weater-app-v2.git

```

2. Enter the directory:

```bash

cd weater-app-v2

```

3. Install dependencies:

```bash

npm install

```

4. Set up environment variables.

Create a .env file in the root folder.

Add the following:

```

OPENWEATHER_API_KEY=your_openweathermap_api_key

```

You can get an API key from [here](https://openweathermap.org/API).

Do NOT push your real API key to GitHub.

5. Start the dev server:

```bash

npm run dev

```

Go to [http://localhost:3000](http://localhost:3000).

## How It works

The app uses Next.js API Route Handlers to securely interact with OpenWeatherMap.

User searches for a city.

App makes a request to the internal weather API.

Server uses OpenWeatherMap Geocoding to find the coordinates for the city.

Current Weather and forecast data is fetched using these coordinates.

Weather information is sent to React components and displayed.

City is then saved locally.

The API key for OpenWeatherMap is kept secure on the server.

## Weather App v1 to v2

This is the next step in my front-end development journey. The original Weather App helped me understand the basics of using weather APIs and creating functional UIs. In version 2 I focused on improving:

Application structure.

TypeScript.

UI/UX design.

API integration.

Data visualisation.

Readability of code.

View the original:

[Weather App v1 (Live)](https://weather-app-seven-theta-62.vercel.app/)

[Weather App v1 (Source Code)](https://github.com/mntandrei/weather-app)


## Author

Andrei - Front-End Developer.

I have created this project as part of my journey to becoming a better front-end developer.

[GitHub](https://github.com/mntandrei) @mntandrei

---

Weather App v2 - Learning, building and improving one project at a time.
