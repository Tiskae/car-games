import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  children: any;
  size?: "sm" | "md" | "lg";
  upper?: boolean;
  color?: string;
  bold?: boolean;
  style?: object;
  italic?: boolean;
  center?: boolean;
}

// prettier-ignore
const TextComp = ({ children, size, upper, color, bold, style , italic, center}: Props) => {
  let fontSize = 13;
  if (size === "md") fontSize = 18;
  else if (size === "lg") fontSize = 28;
  return (
    <Text
      style={{
        fontSize: fontSize,
        textTransform: upper ? "uppercase" : "none",
        color: color ? color : "black",
        fontWeight: bold ? "bold" : "normal",
        ...style,
        fontStyle: italic?"italic": "normal",
        textAlign: center? "center": "left"
      }}
    >
      {children}
    </Text>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
  },
});
