import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Line } from "../Utils";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function Home(props) {
  const onPress = (e) => {
    console.log("pressed");
  };

  return (
    <SafeAreaView>
      {/* 
<View style={styles.a}>
  <View style={styles.b}>
<Text>hello</Text>
  </View>
  <View style={styles.c}>
<Text>hello</Text>

</View>


</View> */}

      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Thread Through Needle</Text>
          <Line />
        </View>
        <View style={styles.inside}>
          <View style={{ flex: 1, minHeight: 410 }}>
            <Card
              style={[styles.card, { backgroundColor: "lightgreen" }]}
              onPress={() => props.navigation.navigate("NewOrder")}
            >
              <Card.Title title="Create New Order" />

              <Card.Cover
                style={styles.img}
                source={{ uri: "https://picsum.photos/700" }}
              />
            </Card>
          </View>

          <View style={{ flex: 1, minHeight: 410 }}>
            <Card
              style={[styles.card, { backgroundColor: "darkorange" }]}
              onPress={() => props.navigation.navigate("ExistingOrder")}
            >
              <Card.Title title="Existing Order" />

              <Card.Cover
                style={styles.img}
                source={{ uri: "https://picsum.photos/700" }}
              />
            </Card>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  a: {
    flex: 1,
    flexDirection: "row",
  },
  b: {
    flex: 1,
    backgroundColor: "blue",
  },
  c: {
    flex: 1,
    backgroundColor: "red",
  },
  container: {
    padding: "4%",
    paddingTop: "12%",
    paddingLeft: "6%",
  },
  inside: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  card: {
    width: "95%",
    height: "66%",
    padding: 1,
    margin: "1.5%",
    borderWidth: 1,
    borderRadius: 30,
  },
  img: {
    padding: 2,
    borderRadius: 11,
  },
});
