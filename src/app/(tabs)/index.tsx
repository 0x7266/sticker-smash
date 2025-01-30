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
  const [showAppOptions, setShowAppOptions] = useState<boolean>();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {};
  const onAddSticker = () => {};
  const onSaveImageAsync = async () => {};

  return (
    <View style={s.container}>
      <View style={s.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View style={s.optionsContainer}>
          <View style={s.optionsRow}>
            <Button action={onReset} style={s.iconButton}>
              <Button.Icon icon="refresh" style={{}} />
              <Button.Label style={s.buttonLabel}>Reset</Button.Label>
            </Button>
            <Button action={onAddSticker} style={{}}>
              <Button.Icon icon="add" size={38} style={{}} />
            </Button>
            <Button action={onSaveImageAsync} style={s.iconButton}>
              <Button.Icon icon="save-alt" />
              <Button.Label style={s.buttonLabel}>Save</Button.Label>
            </Button>
          </View>
        </View>
      ) : (
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
            <Button.Icon icon="photo-library" />
            <Button.Label>Choose a photo</Button.Label>
          </Button>
          <Button
            action={() => {
              setShowAppOptions(true);
            }}
          >
            <Button.Label style={{ color: "#a3a3a3" }}>
              Use this photo
            </Button.Label>
          </Button>
        </View>
      )}
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconButton: {
    flexDirection: "column",
  },
  buttonLabel: {
    color: "#fff",
  },
});
