import React, { useState, useEffect } from "react";
import { Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
export default function ImagePick(props) {
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [mediaStatus, requestPermission1] =
    ImagePicker.useMediaLibraryPermissions();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result;

    if (props.type == "camera") {
      let per = await requestPermission();
      if (status.granted || per) {
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      } else {
        alert("pls provide permission");
      }
    } else if (props.type == "library") {
      let per = requestPermission1();
      if (mediaStatus.granted || per) {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      } else {
        alert("pls provide permission");
      }
    }
    if (!result?.canceled) {
      setImage(result.assets[0].uri);
      props.imagePick(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <Button
        mode="contained"
        style={{
          marginLeft: 5,
          marginRight: 5,
          backgroundColor: "green",
          width: "100%",
        }}
        onPress={pickImage}
      >
        {props.label}
      </Button>
    </View>
  );
}
