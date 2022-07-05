import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>True of false (Overview)</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
