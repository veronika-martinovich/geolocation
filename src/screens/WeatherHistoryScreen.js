import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export const WeatherHistoryScreen = () => {
  const fetchWeather = async () => {
    const response = await fetch(
      "https://react-native-weather-85a81.firebaseio.com/weather.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <View>
      <Text>WeatherHistoryScreen</Text>
    </View>
  );
};
