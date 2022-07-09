import React from "react";
import { StyleSheet, View, Button } from "react-native";
import GameLayout from "../../../layouts/Game";

interface Props {
  navigation: {
    navigate: Function;
  };
}

const GameScreen = (props: Props) => {
  // console.log(props);
  return (
    <GameLayout
      title="Price quiz"
      subtitle="Choose whether the car below has a higher or lower price than the car above. Game ends when
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
