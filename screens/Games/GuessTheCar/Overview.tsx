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
      <Text>Guess the car (Overview)</Text>
      <Button
        onPress={() => props.navigation.navigate("GameScreen")}
        title="Guess the car"
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
