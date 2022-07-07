import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HighScore = (props: { value: string; align?: "left" | "right" }) => {
  return (
    <View
      style={{
        ...styles.container,
        alignItems: props.align === "left" ? "flex-end" : "flex-start",
      }}
    >
      <Text style={styles.text}>High score: {props.value}</Text>
    </View>
  );
};

export default HighScore;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    width: "100%",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});
