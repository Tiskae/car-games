import React, { useEffect, useState } from "react";
import { StyleSheet, View, GestureResponderEvent } from "react-native";
import { Progress } from "native-base";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import Touchable from "./UI/Touchable";
import colors from "../assets/colors";
import Text from "../components/UI/Text";

import { PresenceTransition } from "native-base";

import AnimatedView from "./UI/AnimatedView";

interface Props {
  id: number;
  title: string;
  backgroundColor?: string;
  icon?: React.FunctionComponentElement<any>;
  locked?: boolean;
  clicked: (event: GestureResponderEvent) => void;
  progress?: number;
  highScore?: number;
  isLast?: boolean;
  focus: boolean;
}

const GameBox = (props: Props) => {
  return (
    <PresenceTransition
      visible={props.focus}
      initial={{ translateX: 300, opacity: 0, scale: 1 }}
      animate={{
        translateX: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: +props.id * 65,
          type: "spring",
          velocity: 20,
          friction: 10,
          overshootClamping: false,
        },
      }}
    >
      <Touchable pressed={props.clicked} isDisabled={props.locked || false}>
        <View
          style={{
            ...styles.container,
            backgroundColor: props.backgroundColor || colors.redLight,
            opacity: props.locked ? 0.2 : 1,
            marginBottom: props.isLast ? 30 : 10,
          }}
        >
          <View style={styles.details}>
            <View style={{ alignSelf: "flex-start" }}>
              <Text size="md" upper>
                {props.title}
              </Text>
            </View>
            <View>
              {props.icon || (
                <AntDesign name="question" size={50} color="black" />
              )}
            </View>
          </View>
          {!props.locked && props.progress && (
            <View style={styles.progress}>
              <Progress
                backgroundColor={"#fff"}
                colorScheme={"gray"}
                value={props.progress}
                size="sm"
                borderRadius={7}
              />
            </View>
          )}
          {!props.locked && props.highScore && (
            <View style={styles.highScore}>
              <Text size="sm">HighScore: {props.highScore}</Text>
              <View style={styles.deco}></View>
            </View>
          )}
          {props.locked && (
            <View style={styles.locked}>
              <Fontisto name="locked" size={20} color="black" />
            </View>
          )}
        </View>
      </Touchable>
    </PresenceTransition>
  );
};

export default GameBox;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "column",
    width: "100%",
    padding: 25,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { height: 1, width: 1 },
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 10, // Set conditionally in the component
    borderColor: "#666",
    borderWidth: 2,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  progress: {
    marginTop: 15,
    width: "100%",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#ddd",
  },
  highScore: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  deco: {
    backgroundColor: "#ffffffcc",
    height: 10,
    borderRadius: 7,
    flex: 1,
    marginLeft: 25,
  },
  locked: {
    position: "absolute",
    bottom: 15,
    left: 25,
  },
});
