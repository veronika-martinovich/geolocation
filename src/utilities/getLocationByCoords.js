import { YANDEX_API_KEY } from "../apiKeys";

export async function getLocationByCoords(lat, lon) {
  const geocodeUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${YANDEX_API_KEY}&format=json&geocode=${lon},${lat}&lang=en_RU`;
  const response = await fetch(geocodeUrl);
  const location = await response.json();
  return location;
}
