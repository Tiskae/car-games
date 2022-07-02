import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import Touchable from "./UI/touchable";
import colors from "../assets/colors";

interface Props {
  title: string;
  backgroundColor?: string;
  icon?: React.FunctionComponentElement<any>;
  locked?: boolean;
}

const GameBox = (props: Props) => {
  const Wrapper = props.locked ? View : Touchable;

  return (
    <Wrapper>
      <View
        style={{
          ...styles.container,
          backgroundColor: props.backgroundColor || colors.redLight,
          opacity: props.locked ? 0.2 : 1,
        }}
      >
        <View style={{ alignSelf: "flex-start" }}>
          <Text style={{ fontSize: 18, textTransform: "uppercase" }}>
            {props.title}
          </Text>
        </View>
        <View>
          {props.icon || <AntDesign name="question" size={50} color="black" />}
        </View>
        {props.locked && (
          <View style={styles.locked}>
            <Fontisto name="locked" size={20} color="black" />
          </View>
        )}
      </View>
    </Wrapper>
  );
};

export default GameBox;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    width: "100%",
    padding: 25,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { height: 1, width: 1 },
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  locked: {
    position: "absolute",
    bottom: 15,
    left: 25,
  },
});
