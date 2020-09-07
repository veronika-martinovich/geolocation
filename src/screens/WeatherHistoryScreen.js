import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { DetailsModal } from "../components/DetailsModal";
import { THEME } from "../theme";

export const WeatherHistoryScreen = () => {
  const tableHead = ["Date", "Location", ""];
  const [tableData, setTableData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const createTableData = (data) => {
    console.log(data);
    const table = [];
    const modals = [];
    Object.values(data).forEach((item) => {
      const row = [
        new Date(item.time).toLocaleDateString(),
        item.location,
        "button",
      ];
      const modal = {
        lat: item.lat,
        lon: item.lon,
        temp: item.temp,
        description: item.description,
        humidity: item.humidity,
        pressure: item.pressure,
        wind: item.wind,
      };
      table.push(row);
      modals.push(modal);
    });
    setTableData(table);
    setModalData(modals);
    console.log(table, modals);
  };

  const fetchWeather = async () => {
    const response = await fetch(
      "https://rn-weather-528cb.firebaseio.com/weather.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data) createTableData(data);
  };

  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!tableData || !modalData) return null;
  return (
    <View style={styles.tableContainer}>
      <Table
        borderStyle={{
          borderWidth: 1,
          borderColor: THEME.PRIMARY_DISABLED_COLOR,
        }}
      >
        <Row data={tableHead} textStyle={styles.tableHead} />
        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.tableRow}>
            <DetailsModal
              modalVisible={modalVisible}
              weather={modalData[index]}
              handleModalVisibility={handleModalVisibility}
            />
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                textStyle={styles.tableCell}
                data={
                  cellData === "button" ? (
                    <View style={{ flex: 1 }}>
                      <Button
                        title="View details"
                        onPress={handleModalVisibility}
                        style={styles.button}
                        color={THEME.PRIMARY_COLOR}
                      />
                    </View>
                  ) : (
                    cellData
                  )
                }
              ></Cell>
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: THEME.BG_COLOR,
  },
  tableHead: {
    color: THEME.PRIMARY_DARK_COLOR,
    paddingLeft: 5,
    fontSize: 20,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    padding: 5,
    fontSize: 20,
    height: 60,
  },
  button: {
    width: 80,
  },
});
