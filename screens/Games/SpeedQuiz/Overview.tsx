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
      <Text>Speed quiz (Overview)</Text>
      <Button
        onPress={() => props.navigation.navigate("GameScreen")}
        title="Speed quiz"
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
