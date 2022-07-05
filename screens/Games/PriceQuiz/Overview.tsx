import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

interface Props {
  navigation: {
    navigate: Function;
  };
}

const GameScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Price Quiz (Overview)</Text>
      <Button
        onPress={() => props.navigation.navigate("GameScreen")}
        title="Price Quiz"
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
});
