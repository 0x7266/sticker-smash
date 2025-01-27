import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default function IndexScreen() {
  return (
    <View style={s.container}>
      <Link href="/about" style={s.text}>
        Go to About screen
      </Link>
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
