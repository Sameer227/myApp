import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Line, Dropdown } from "../Utils";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Storage } from "expo-storage";
import ImagePick from "./ImagePicker";
import Header from "./Header";

export default function NewOrder(props) {
  const { navigation } = props;

  useEffect(() => {
    let d1 = navigation.getParam("orderDetails");
    if (d1) {
      setData(d1);
      if (d1.image) {
        setImage(d1.image);
      }
    }
  }, []);

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    Category: "",
    NameOnHoop: "",
    DateOnHoop: "",
    AdditionalInfo: "",
    DeliveryDate: "",
    Accessories: "",
    image: null,
  });

  const imageStore = (img) => {
    setImage(img);
    setData((prev) => {
      return { ...prev, image: img };
    });
  };

  const store = (value, field) => {
    console.log(value, field, data);
    setData((prev) => {
      return { ...prev, [field]: value };
    });
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
            <Dropdown
              label="Category"
              setFn={store}
              defaultValue={data.Category}
              items={[
                "Wedding hoop with calendar",
                "Wedding hoop",
                "Birthday Hoop",
                "Birthday Hoop with calendar.",
                "Decorative",
                "Customized",
                "Anniversary",
                "Portrait",
                "Others",
              ]}
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Name on Hoop"
              //   value={text}
              onChangeText={(text) => {
                store(text, "NameOnHoop");
              }}
              defaultValue={data.NameOnHoop}
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
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Additional Information"
              //   value={text}
              onChangeText={(text) => {
                store(text, "AdditionalInfo");
              }}
              defaultValue={data.AdditionalInfo}
            />
            <TextInput
              style={styles.text_input}
              mode="outlined"
              label="Delivery Date"
              //   value={text}
              onChangeText={(text) => {
                store(text, "DeliveryDate");
              }}
              defaultValue={data.DeliveryDate}
            />
            <Dropdown
              label="Accessories"
              setFn={store}
              defaultValue={data.Accessories}
              items={["Tassel", "Stand", "Frame"]}
            />
          </View>
        </View>
        <View style={styles.thirdRow}>
          <ImagePick
            imagePick={imageStore}
            type="library"
            label="Upload Image"
          />
          <ImagePick
            imagePick={imageStore}
            type="camera"
            label="Capture Image"
          />
        </View>
        {image && (
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
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
        <View style={{ minHeight: 40, margin: 10, borderColor: "black" }}>
          <Button
            onPress={() =>
              props.navigation.navigate("ShippingDetails", {
                orderDetails: data,
              })
            }
            mode="outlined"
          >
            Next
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
    margin: 20,
  },
});
