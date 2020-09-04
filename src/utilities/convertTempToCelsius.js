export function convertTempToCelsius(tempInKelvin) {
  const tempInCelsius = Math.round(tempInKelvin - 273.15);
  return tempInCelsius;
}