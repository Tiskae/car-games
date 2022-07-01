import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameCategories = () => {
  return (
    <View style={styles.container}>
      <Text>Game categories component</Text>
    </View>
  );
};

export default GameCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
