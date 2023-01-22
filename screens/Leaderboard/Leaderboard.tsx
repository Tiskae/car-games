import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Leaderboard = () => {
  return (
    <View style={styles.container}>
      <Text>Leaderboard component</Text>
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
