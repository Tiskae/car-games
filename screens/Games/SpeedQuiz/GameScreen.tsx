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
      <Text>Speed Quiz</Text>
      <Button
        title="Quit"
        onPress={() => props.navigation.navigate("GameOverview")}
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
