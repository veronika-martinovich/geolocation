import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { THEME } from "../theme";

export const WeatherIcon = ({ iconId }) => {
  return (
    <View style={styles.weatherIconContainer}>
      <Image
        style={styles.weatherIcon}
        source={{ uri: `http://openweathermap.org/img/wn/${iconId}@2x.png` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  weatherIcon: {
    width: 100,
    height: 100,
    resizeMode: 'cover'
  },
  weatherIconContainer: {
    width: 100,
    height: 100,
    backgroundColor: THEME.PRIMARY_DISABLED_COLOR,
    borderRadius: 100,
    marginTop: 50
  }
});
