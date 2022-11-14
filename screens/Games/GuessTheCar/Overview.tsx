import React from "react";
import { StyleSheet, View, Button } from "react-native";
import GameLayout from "../../../layouts/Game";

interface Props {
  navigation: {
    navigate: Function;
  };
}

const GameScreen = (props: Props) => {
  return (
    <GameLayout
      title="Guess the car"
      subtitle="Guess the car displayed. Game ends when
                you lose your streak."
      highScoreVal="12"
    >
      <Button
        onPress={() => props.navigation.navigate("GameScreen")}
        title="Start"
      />
    </GameLayout>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
