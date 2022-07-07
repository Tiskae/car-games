import React from "react";
import { StyleSheet, View, Button } from "react-native";
import HighScore from "../../../components/HighScore";

import Text from "../../../components/UI/Text";
import Touchable from "../../../components/UI/Touchable";

interface Props {
  navigation: {
    navigate: Function;
  };
}

const levels = new Array(20).fill(1).map((el, idx) => idx + 1);

const GameScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <HighScore value="20" align="left" />
      <View style={styles.headings}>
        <Text size="lg" bold upper style={{ letterSpacing: 1 }}>
          Logo Quiz
        </Text>
        <Text size="md" color="#555" center>
          Fill in the name of the car brand that owns the logo displayed
        </Text>
      </View>
      <View style={styles.levels}>
        {levels.map((l) => (
          <Touchable
            key={l}
            pressed={() => {
              props.navigation.navigate("GameScreen", { level: l });
            }}
          >
            <View style={styles.levelBox}>
              <Text size="md">{l}</Text>
            </View>
          </Touchable>
        ))}
      </View>
      {/* <Button
        onPress={() => props.navigation.navigate("GameScreen")}
        title="Price Quiz"
      /> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    padding: 20,
    // backgroundColor: "#ddd",
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  headings: {
    alignItems: "center",
  },
  levels: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  levelBox: {
    backgroundColor: "#a3a3a3",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    width: 60,
    height: 60,
    margin: 5,
  },
});
