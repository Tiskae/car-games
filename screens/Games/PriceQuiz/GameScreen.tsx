import React from "react";
import { StyleSheet, View, Button } from "react-native";

import Text from "../../../components/UI/Text";

interface Props {
  navigation: {
    navigate: Function;
  };
  route: {
    params: {
      level: string | number;
    };
  };
}

const GameScreen = (props: Props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.headings}>
        <Text size="lg" bold upper style={{ letterSpacing: 1 }}>
          Price Quiz: Level {props.route.params.level}
        </Text>
      </View>
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
    padding: 20,
    flexDirection: "column",
  },
  headings: {
    alignItems: "center",
  },
});
