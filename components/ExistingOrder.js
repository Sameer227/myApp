import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Line } from "../Utils";
import { Storage } from "expo-storage";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./Header";

export default function ExistingOrder(props) {
  const [data, setData] = useState([]);
  const { navigation } = props;
  // useEffect(() => {
  const getData = async () => {
    let localStorage = await Storage.getItem({ key: "Orders" });
    if (localStorage) {
      localStorage = JSON.parse(localStorage);
    } else {
      localStorage = [];
    }
    setData(localStorage);
  };
  getData();
  // });

  return (
    <ScrollView>
      <View>
        <Header
          navigation={navigation}
          label="Existing Orders"
          color="darkorange"
        />

        <View style={styles.second_row}>
          {data.map((order, key) => {
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 8,
                  padding: 7,
                  borderWidth: 1,
                  borderRadius: 5,
                  maxHeight: "9%",
                }}
                key={key}
              >
                <Text style={{ flex: 0.25, fontSize: 17 }}>{order.id}.</Text>
                <Text style={{ flex: 0.95, fontSize: 16 }}>
                  Delivery Date |
                </Text>
                <Text
                  style={{ flex: 0.9, fontSize: 16 }}
                  onPress={() => {
                    navigation.push("OrderDetails", {
                      order: order.orderDetails,
                    });
                  }}
                >
                  View Details |
                </Text>
                <Text
                  style={{ flex: 1.5, fontSize: 16 }}
                  onPress={() => {
                    navigation.push("OrderShipDetails", {
                      orderShip: order.shippingDetails,
                    });
                  }}
                >
                  View Shipping Details |
                </Text>
                <Text style={{ flex: 0.4, fontSize: 16 }}>{order.status}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "green",
  },

  second_row: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "orange",
    minHeight: "60%",
    margin: 10,
    marginTop: 50,
  },

  container: {
    padding: "4%",
    paddingTop: "12%",
    paddingLeft: "6%",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  heading: {
    borderWidth: 1,
    margin: 5,
    padding: 8,
    maxHeight: "25%",
    borderRadius: 18,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  heading_text: {
    fontWeight: "bold",
    fontSize: 35,
  },
});
