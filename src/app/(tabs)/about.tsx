import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={s.container}>
      <Text style={s.text}>About</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
