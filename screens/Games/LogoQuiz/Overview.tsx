import { PresenceTransition } from "native-base";
import React from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Text from "../../../components/UI/Text";
import Touchable from "../../../components/UI/Touchable";

interface Props {
  navigation: {
    navigate: Function;
  };
}

const levels = new Array(30).fill(1).map((el, idx) => idx + 1);

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
      <ScrollView contentContainerStyle={styles.levels}>
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
                {/* <Text size="md">{l}</Text> */}
                <Ionicons name="car-sport-sharp" size={28} color="#222" />
              </View>
            </Touchable>
          </PresenceTransition>
        ))}
      </ScrollView>
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
    paddingVertical: 20,
  },
  levelBox: {
    // backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    width: 70,
    height: 70,
    margin: 5,
  },
});
