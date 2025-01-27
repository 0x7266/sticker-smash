import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default function NotFoundScreen() {
  return (
    <View style={s.container}>
      <Link href="/" style={s.button}>
        Go back to Home screen!
      </Link>
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

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
