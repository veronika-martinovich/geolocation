import React from "react";
import { StyleSheet, Modal, View, Text, Button } from "react-native";
import { WeatherData } from "../components/WeatherData";
import { THEME } from "../theme";

export const DetailsModal = ({
  modalVisible,
  weather,
  handleModalVisibility,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      presentationStyle="overFullScreen"
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <WeatherData
            description={weather.description}
            humidity={weather.humidity}
            pressure={weather.pressure}
            temp={weather.temp}
            wind={weather.wind}
          />
          <Button
            style={styles.textStyle}
            title="Close"
            onPress={handleModalVisibility}
            color={THEME.PRIMARY_COLOR}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.192)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 20,
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
