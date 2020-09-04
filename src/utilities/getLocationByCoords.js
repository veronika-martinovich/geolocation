export async function getLocationByCoords(lat, lon) {
  const response = await fetch(
    `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?language=en&location=${lat}%252C${lon}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "trueway-geocoding.p.rapidapi.com",
        "x-rapidapi-key": "915bec7f41msh78ce6bbb7b7d92bp167868jsn766d5721a8b2",
      },
    }
  );
  const location = await response.json();
  return location;
}
