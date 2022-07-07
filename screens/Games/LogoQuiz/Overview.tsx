import { PresenceTransition } from "native-base";
import React from "react";
import { StyleSheet, View, Button } from "react-native";

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
      <View style={styles.headings}>
        <Text size="lg" bold upper style={{ letterSpacing: 1 }}>
          Logo Quiz
        </Text>
        <Text size="md" color="#555" center>
          Fill in the name of the car brand that owns the logo displayed
        </Text>
      </View>
      <View style={styles.levels}>
        {levels.map((l, idx) => (
          <PresenceTransition
            key={l}
            visible={true}
            initial={{ translateY: 300, opacity: 0, scale: 1 }}
            animate={{
              translateY: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.1,
                delay: idx * 20,
                type: "spring",
                velocity: 20,
                friction: 20,
                overshootClamping: false,
              },
            }}
          >
            <Touchable
              pressed={() => {
                props.navigation.navigate("GameScreen", { level: l });
              }}
            >
              <View style={styles.levelBox}>
                <Text size="md">{l}</Text>
              </View>
            </Touchable>
          </PresenceTransition>
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
