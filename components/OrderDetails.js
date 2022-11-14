import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Line, Dropdown } from "../Utils";
import { Button, TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Storage } from "expo-storage";
import Header from "./Header";

export default function OrderDetails(props) {
  const { navigation } = props;

  const [data, setData] = useState(navigation.getParam("order"));

  const store = (value, field) => {
    console.log(value, field, data);
    setData((prev) => {
      return { ...prev, [field]: value };
    });
  };

  let StatusList = [
    {
      type: "Start Order",
      status: "Created",
    },
    {
      type: "Ship Order",
      status: "In Progress",
    },
    {
      type: "Order Delivered",
      status: "Shipped",
    },
    {
      type: "Delivered",
      status: "Delivered",
    },
  ];

  const StatusChange = async () => {
    let localStorage = await Storage.getItem({ key: "Orders" });
    localStorage = JSON.parse(localStorage);
    let find = StatusList.find((o) => o.status == data.status);
    let index = StatusList.indexOf(find);
    console.log(data);
    let orderFind = localStorage.find((o) => o.id == data.id);
    console.log(StatusList[index + 1].status, index);
    console.log(orderFind, "pppppp");
    orderFind.orderDetails.status = StatusList[index + 1].status;
    orderFind.status = StatusList[index + 1].status;
    await Storage.setItem({
      key: `Orders`,
      value: JSON.stringify(localStorage),
    });
    navigation.push("ExistingOrder");
  };

  return (
    <ScrollView>
      <View>
        <Header
          navigation={navigation}
          label="Order Details"
          color="darkorange"
        />

        <View style={styles.order_details}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Order Details :
          </Text>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Category"
              defaultValue={data.Category}
              disabled
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Name on Hoop"
              //   value={text}
              defaultValue={data.NameOnHoop}
              disabled
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Date on Hoop"
              //   value={text}

              onChangeText={(text) => {
                store(text, "DateOnHoop");
              }}
              defaultValue={data.DateOnHoop}
              disabled
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Additional Information"
              defaultValue={data.AdditionalInfo}
              disabled
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Delivery Date"
              defaultValue={data.DeliveryDate}
              disabled
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Accessories"
              defaultValue={data.Accessories}
              disabled
            />
          </View>
          {data.image && (
            <View
              style={{
                margin: 10,
                alignContent: "center",
                alignItems: "center",
                borderWidth: 1,
                padding: 5,
              }}
            >
              <Image
                source={{ uri: data.image }}
                style={{ width: 200, height: 200 }}
              />
            </View>
          )}
        </View>
        <View
          style={{
            margin: 10,
            marginBottom: 40,
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <Button
            onPress={StatusChange}
            disabled={data.status == "Delivered"}
            mode="contained"
            style={{ backgroundColor: "green" }}
          >
            {StatusList.find((o) => o.status == data.status).type}
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
