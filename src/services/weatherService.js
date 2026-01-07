import { DateTime } from "luxon";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// 1. Fetch Raw Data
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

// 2. Format Current Weather
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

// 3. Format Forecast Weather
const formatForecastWeather = (data) => {
  let { list, timezone } = data;

  // We want a daily forecast (openweather free tier gives 3-hour steps)
  // We will filter to get roughly 1 reading per day (at 12:00 PM usually)
  const daily = list.filter((reading) => reading.dt_txt.includes("12:00:00")).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"), // Mon, Tue...
      temp: d.main.temp,
      icon: d.weather[0].icon,
      date: d.dt_txt,
    };
  });

  return { daily, timezone };
};

// 4. Helper: Format Time using Luxon
const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// --- MAIN FUNCTION EXPORT ---
const getFormattedWeatherData = async (searchParams) => {
  // A. Get Current Weather
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  // B. Get 5-Day Forecast (using lat/lon from step A)
  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then(formatForecastWeather);

  // C. Get Air Quality (Level 3 Feature!)
  const airQualityData = await getWeatherData("air_pollution", {
    lat,
    lon,
  }).then((data) => data.list[0].main.aqi);

  // D. Combine everything
  return { 
      ...formattedCurrentWeather, 
      ...formattedForecastWeather, 
      aqi: airQualityData, // 1 = Good, 5 = Very Poor
      zone: formattedForecastWeather.timezone 
  };
};

// Helper to get icon URL
const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };