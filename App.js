import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CurrentWeatherScreen } from "./src/screens/CurrentWeatherScreen";
import { WeatherHistoryScreen } from "./src/screens/WeatherHistoryScreen";
import { THEME } from "./src/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: THEME.PRIMARY_DARK_COLOR,
          activeBackgroundColor: THEME.PRIMARY_COLOR,
          inactiveTintColor: THEME.PRIMARY_DARK_DISABLED_COLOR,
          inactiveBackgroundColor: THEME.PRIMARY_DISABLED_COLOR,
          labelStyle: {
            fontSize: 18,
          },
          style: {},
          tabStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Tab.Screen name="Weather" component={CurrentWeatherScreen} />
        <Tab.Screen name="History" component={WeatherHistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
