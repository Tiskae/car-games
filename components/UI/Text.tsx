import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

interface TextProps {
  children: any;
  size?: "tiny" | "sm" | "md" | "lg" | "x-lg";
  upper?: boolean;
  color?: string;
  bold?: boolean;
  style?: TextStyle;
  italic?: boolean;
  center?: boolean;
}

// prettier-ignore
const TextComp = ({ children, size, upper, color, bold, style , italic, center}: TextProps) => {
  let fontSize = 13;

  if (size === "tiny") fontSize = 14;
  else if (size === "sm") fontSize = 16;
  else if (size === "md") fontSize = 18;
  else if (size === "lg") fontSize = 22;
  else if (size === "x-lg") fontSize = 26;

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
