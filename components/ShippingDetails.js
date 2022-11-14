import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Line, Dropdown } from "../Utils";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
} from "react-native-paper";
import { Storage } from "expo-storage";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./Header";

export default function ShippingDetails(props) {
  const { navigation } = props;
  console.log(navigation.getParam("orderDetails"));
  const [orderDetails, setorder] = useState(
    navigation.getParam("orderDetails")
  );
  const [data, setData] = useState({
    FullName: "",
    Address: "",
    State: "",
    Pincode: "",
    Contact: "",
  });

  const store = (value, field) => {
    console.log(value, field, data);
    setData((prev) => {
      return { ...prev, [field]: value };
    });
  };

  const finish = async () => {
    console.log(data, orderDetails);

    let localStorage = await Storage.getItem({ key: "Orders" });

    if (localStorage) {
      localStorage = JSON.parse(localStorage);
    } else {
      localStorage = [];
    }
    console.log(localStorage);
    let final = {
      orderDetails: orderDetails,
      shippingDetails: data,
      id: localStorage.length + 1,
      status: "Created",
    };
    final.orderDetails.status = "Created";
    final.orderDetails.id = localStorage.length + 1;
    localStorage.push(final);
    await Storage.setItem({
      key: `Orders`,
      value: JSON.stringify(localStorage),
    });

    navigation.push("Home");
  };

  return (
    <ScrollView>
      <View>
        <Header
          navigation={navigation}
          label="Create New Order"
          color="lightgreen"
        />

        <View style={styles.order_details}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Order Details :
          </Text>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Full Name"
              //   value={text}
              onChangeText={(text) => {
                store(text, "FullName");
              }}
            />
            <TextInput
              multiline
              style={[styles.text_input]}
              mode="outlined"
              label="Address"
              numberOfLines={5}
              //   value={text}
              onChangeText={(text) => {
                store(text, "Address");
              }}
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="State"
              //   value={text}
              onChangeText={(text) => {
                store(text, "State");
              }}
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="PinCode"
              //   value={text}
              onChangeText={(text) => {
                store(text, "Pincode");
              }}
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Contact Number"
              //   value={text}
              onChangeText={(text) => {
                store(text, "Contact");
              }}
            />
          </View>
        </View>
        <View style={styles.thirdRow}>
          <Button
            mode="contained"
            onPress={() => navigation.push("NewOrder", { orderDetails })}
            style={styles.button}
          >
            Back
          </Button>
          <Button onPress={finish} mode="contained" style={styles.button}>
            Finish
          </Button>
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

  thirdRow: {
    flex: 1,
    flexDirection: "row",
    minHeight: 35,
  },

  container: {
    padding: "4%",
    paddingTop: "4%",
    paddingLeft: "6%",
  },
  text_input: {
    marginTop: 4,
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
    backgroundColor: "lightgreen",
  },
  heading_text: {
    fontWeight: "bold",
    fontSize: 35,
  },
  order_details: {
    margin: 30,
  },
});
