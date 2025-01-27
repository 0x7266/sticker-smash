import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={s.container}>
      <Text style={s.text}>Edit app/index.tsx to edit this screen.</Text>
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
});
