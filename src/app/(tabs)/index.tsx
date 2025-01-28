import { StyleSheet, View } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import ImageViewer from "@/src/components/ImageViewer";
import Button from "@/src/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={s.container}>
      <View style={s.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={s.footerContainer}>
        <Button
          style={{
            backgroundColor: "#e3e3e3",
            borderWidth: 4,
            borderColor: "#ffd33d",
            borderRadius: 18,
          }}
          action={pickImage}
        >
          <Button.Icon icon="picture-o" />
          <Button.Label>Choose a photo</Button.Label>
        </Button>
        <Button
          action={() => {
            alert("HEY");
          }}
        >
          <Button.Label style={{ color: "#a3a3a3" }}>
            Use this photo
          </Button.Label>
        </Button>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    gap: 12,
    flex: 1 / 3,
    alignItems: "center",
  },
});
