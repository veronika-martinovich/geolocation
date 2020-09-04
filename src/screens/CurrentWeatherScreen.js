import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { getLocationByCoords } from "../utilities/getLocationByCoords";
import { getWeatherByLocation } from "../utilities/getWeatherByLocation";
import { Coords } from "../components/Coords";
import { Location } from "../components/Location";
import { WeatherIcon } from "../components/WeatherIcon";
import { WeatherData } from "../components/WeatherData";
import { THEME } from "../theme";

export const CurrentWeatherScreen = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [forecast, setForecast] = useState(null);

  const findCoordinates = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        setTime(position.coords.timestamp);
        findLocation(position.coords.latitude, position.coords.longitude);
      },
      (error) => Alert.alert(error.message)
    );
  };

  const findLocation = async (lat, lon) => {
    console.log(lat, lon);
    const locationCity = await getLocationByCoords(lat, lon);
    const location = locationCity.results[0].locality;
    console.log("findLocation", location);
    setLocation(location);
    findWeather(location);
  };

  const findWeather = async (location) => {
    const forecast = await getWeatherByLocation(location);
    setForecast(forecast);
  };

  useEffect(() => {
    findCoordinates();
  }, []);

  if (!lat || !lon || !location || !forecast) return null;
  return (
    <View style={styles.weatherScreen}>
      <Coords lat={lat} lon={lon} />
      <Location location={location} />
      <WeatherIcon iconId={forecast.weather[0].icon} />
      <WeatherData
        description={forecast.weather[0].description}
        humidity={forecast.main.humidity}
        pressure={forecast.main.pressure}
        temp={forecast.main.temp}
        wind={forecast.wind.speed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  weatherScreen: {
    flex: 1,
    paddingTop: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: THEME.BG_COLOR
  },
});
