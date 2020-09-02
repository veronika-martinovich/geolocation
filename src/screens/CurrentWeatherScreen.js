import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { transformCoords } from "../utilities/transformCoords";
import { THEME } from "../theme";
import { getLocationByCoords } from "../utilities/getLocationByCoords";
import * as Location from "expo-location";

export const CurrentWeatherScreen = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);

  const findCoordinates = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        setTime(position.coords.timestamp);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true }
    );
  };

  const findLocation = async () => {
    const locationCity = await getLocationByCoords(lat, lon);
    setLocation(
      locationCity.response.GeoObjectCollection.featureMember[2].GeoObject.name
    );
    console.log(locationCity);
  };

  useEffect(() => {
    findCoordinates();
    findLocation();
  }, []);

  if (!lat || !lon || !location) return null;

  return (
    <View style={styles.weatherScreen}>
      <View style={styles.coordsContainer}>
        <Text style={styles.coordsText}>Latitude: {transformCoords(lat)}</Text>
        <Text style={styles.coordsText}>Longitude: {transformCoords(lon)}</Text>
        <Text style={styles.coordsText}>{location}</Text>
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
    fontSize: 18,
    color: THEME.PRIMARY_DARK_COLOR,
    marginBottom: 5,
  },
});
