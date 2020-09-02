import { WEATHER_API_KEY } from "../apiKeys";

export async function getWeatherByLocation(location) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}`;
  const response = await fetch(weatherUrl);
  const weather = await response.json();
  return weather;
}
