import React from "react";
import { StyleSheet, Text, View } from "react-native";

type HighScoreProps = { value: string; align?: "left" | "right" };

const HighScore = ({value, align}: HighScoreProps) => {
  return (
    <View
      style={{
        ...styles.container,
        alignItems: align === "left" ? "flex-end" : "flex-start",
      }}
    >
      <Text style={styles.text}>High score: {value}</Text>
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
