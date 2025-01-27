import { StyleSheet, View } from "react-native";

import ImageViewer from "@/src/components/ImageViewer";
import Button from "@/src/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={s.container}>
      <View style={s.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={s.footerContainer}>
        <Button style={{ backgroundColor: "#e3e3e3" }}>
          <Button.Icon icon="picture-o" />
          <Button.Label>Choose a photo</Button.Label>
        </Button>
        <Button style={{ backgroundColor: "#3e3e3e" }}>
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
