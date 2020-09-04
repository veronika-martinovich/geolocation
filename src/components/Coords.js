import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { transformCoords } from "../utilities/transformCoords";
import { THEME } from "../theme";

export const Coords = ({lat, lon}) => {
  return (
    <View style={styles.coordsContainer}>
      <Text style={styles.coordsText}>Latitude: {transformCoords(lat)}</Text>
      <Text style={styles.coordsText}>Longitude: {transformCoords(lon)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  coordsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  coordsText: {
    fontSize: 25,
    color: THEME.PRIMARY_DARK_COLOR,
    marginBottom: 5,
  },
});
