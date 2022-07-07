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
      title="True of false"
      subtitle="Choose whether the statement is true or false. Game ends when
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
