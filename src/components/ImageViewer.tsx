import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={imageSource} style={s.image} />;
}

const s = StyleSheet.create({
  image: {
    borderRadius: 18,
    height: 440,
    width: 320,
  },
});
