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
      title="Power quiz"
      subtitle="Choose whether the power of the car is higer or lower. Game ends when
                you lose your streak."
      highScoreVal="20"
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
