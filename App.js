import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExistingOrder from "./components/ExistingOrder";
import Home from "./components/HomePage";
import NewOrder from "./components/NewOrder";
import ShippingDetails from "./components/ShippingDetails";
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Button } from "react-native-paper";
import OrderDetails from "./components/OrderDetails";
import ViewShippingDetails from "./components/ViewShip";
import ImagePicker from "./components/ImagePicker";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  NewOrder: {
    screen: NewOrder,
    navigationOptions: {
      headerShown: false,
    },
  },
  ShippingDetails: {
    screen: ShippingDetails,
    navigationOptions: {
      headerShown: false,
    },
  },
  ExistingOrder: {
    screen: ExistingOrder,
    navigationOptions: {
      headerShown: false,
    },
  },
  OrderDetails: {
    screen: OrderDetails,
    navigationOptions: {
      headerShown: false,
    },
  },
  OrderShipDetails: {
    screen: ViewShippingDetails,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
