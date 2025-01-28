import {
  Text,
  StyleSheet,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
  action: VoidFunction;
};

export default function Button({
  isLoading = false,
  action,
  children,
  style,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[s.buttonContainer, style]}
      disabled={isLoading}
      onPress={action}
      {...rest}
    >
      {isLoading ? <ActivityIndicator size="small" color="#fbd" /> : children}
    </TouchableOpacity>
  );
}

type ButtonIconProps = {
  icon: keyof typeof FontAwesome.glyphMap;
  size?: number;
};

function ButtonIcon({ icon, size = 24 }: ButtonIconProps) {
  return <FontAwesome name={icon} size={size} />;
}

Button.Icon = ButtonIcon;

function ButtonLabel({ children, style }: TextProps) {
  return <Text style={[s.buttonLabel, style]}>{children}</Text>;
}

Button.Label = ButtonLabel;

const s = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderRadius: 14,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#3e3e3e",
    fontSize: 16,
  },
});
