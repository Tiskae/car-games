import React from "react";
import { StyleSheet, Button, ImageBackground } from "react-native";
import GameLayout from "../../../layouts/Game";

interface Props {
  navigation: {
    navigate: Function;
  };
}

const GameScreen = (props: Props) => {
  // console.log(props);
  return (
    <ImageBackground
      source={require("../../../assets/camaro.jpeg")}
      style={{ flex: 1 }}
    >
      <GameLayout
        title="Price quiz"
        subtitle="Choose the car woth the higher price. Game ends when
                you lose your streak."
        highScoreVal="20"
      >
        <Button
          onPress={() => props.navigation.navigate("GameScreen")}
          title="Start"
        />
      </GameLayout>
    </ImageBackground>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
