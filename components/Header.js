import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Line, Dropdown } from "../Utils";

import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

export default function Header(props) {
  const { navigation } = props;

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.title}>Thread Through Needle</Text>
            <Button
              onPress={() => navigation.push("Home")}
              mode="outlined"
              style={{ flex: 1, marginLeft: 4 }}
            >
              Home
            </Button>
          </View>
          <Line />
        </View>
        <View style={[styles.heading, { backgroundColor: props.color }]}>
          <Text style={styles.heading_text}>{props.label}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "4%",
    paddingTop: "14%",
    paddingLeft: "6%",
  },
  text_input: {
    marginTop: 4,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 5,
    flex: 5,
  },
  heading: {
    borderWidth: 1,
    margin: 5,
    padding: 8,
    maxHeight: "35%",
    minHeight: "20%",
    borderRadius: 18,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  heading_text: {
    fontWeight: "bold",
    fontSize: 35,
  },
});
