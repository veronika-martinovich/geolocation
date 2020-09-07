import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { THEME } from "../theme";
import { convertTempToCelsius } from "../utilities/convertTempToCelsius";

export const WeatherData = ({
  description,
  humidity,
  pressure,
  temp,
  wind,
}) => {
  return (
    <View style={styles.weatherDataContainer}>
      <Text style={[styles.weatherData, styles.weatherTemp]}>
        {convertTempToCelsius(temp)}°
      </Text>
      <Text style={styles.weatherData}>Humidity: {humidity}%</Text>
      <Text style={styles.weatherData}>Pressure: {pressure} hhmm</Text>
      <Text style={styles.weatherData}>Wind: {wind} m/s</Text>
      <Text style={styles.weatherData}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDataContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
  },
  weatherData: {
    fontSize: 25,
    marginBottom: 5,
    color: THEME.PRIMARY_DARK_COLOR,
  },
  weatherTemp: {
    fontSize: 50,
    marginBottom: 50
  }

});
