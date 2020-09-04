import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../theme";

export const Location = ({ location }) => {
  return (
    <View>
      <Text style={styles.locationText}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationText: {
    fontSize: 25,
    color: THEME.PRIMARY_DARK_COLOR,
    marginBottom: 5,
  },
});
