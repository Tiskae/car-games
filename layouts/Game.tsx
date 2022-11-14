import React from "react";
import { StyleSheet, View, Button } from "react-native";
import HighScore from "../components/HighScore";

import Text from "../components/UI/Text";

interface Props {
  children: any;
  title: string;
  subtitle: string;
  highScoreVal: string;
  style?: object;
}

/**
 *
 * @param props
 * @returns the layout of the game overview screen. Works for all game overview screens except 'Logo Quiz'
 */

const GameLayout = (props: Props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <HighScore value="20" align="left" />
      <View style={styles.headings}>
        <Text size="x-lg" bold upper style={{ letterSpacing: 1, marginBottom: 10 , }}>
          {props.title}
        </Text>
        <Text size="md" color="#555" center>
          {props.subtitle}
        </Text>
      </View>
      {props.children}
    </View>
  );
};

export default GameLayout;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#ffffffee"
  },
  headings: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
