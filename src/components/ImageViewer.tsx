import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={s.image} />;
}

const s = StyleSheet.create({
  image: {
    borderRadius: 18,
    height: 440,
    width: 320,
  },
});
