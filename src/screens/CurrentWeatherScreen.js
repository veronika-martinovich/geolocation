import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { transformCoords } from "../utilities/transformCoords";
import { THEME } from "../theme";
import { getLocationByCoords } from "../utilities/getLocationByCoords";
import { getWeatherByLocation } from "../utilities/getWeatherByLocation";

export const CurrentWeatherScreen = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  const findCoordinates = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        setTime(position.coords.timestamp);
      },
      (error) => Alert.alert(error.message)
    );
  };

  const findLocation = async () => {
    const locationCity = await getLocationByCoords(lat, lon);
    setLocation(
      locationCity.response.GeoObjectCollection.featureMember[3].GeoObject.name
    );
  };

  const findWeather = async () => {
    const weather = await getWeatherByLocation(location);
    setWeather(weather);
    console.log(weather);
  };

  useEffect(() => {
    findCoordinates();
    findLocation();
    findWeather();
  }, []);

  if (!lat || !lon || !location || !weather) return null;

  return (
    <View style={styles.weatherScreen}>
      <View style={styles.coordsContainer}>
        <Text style={styles.coordsText}>Latitude: {transformCoords(lat)}</Text>
        <Text style={styles.coordsText}>Longitude: {transformCoords(lon)}</Text>
        <Text style={styles.coordsText}>{location}</Text>
        <Text style={styles.coordsText}>{weather.main.humidity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherScreen: {
    paddingTop: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  coordsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  coordsText: {
    fontSize: 20,
    color: THEME.PRIMARY_DARK_COLOR,
    marginBottom: 5,
  },
});
