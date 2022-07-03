import React from "react";
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import Touchable from "./UI/Touchable";
import colors from "../assets/colors";

interface Props {
  title: string;
  backgroundColor?: string;
  icon?: React.FunctionComponentElement<any>;
  locked?: boolean;
  clicked: (event: GestureResponderEvent) => void;
}

const GameBox = (props: Props) => {
  return (
    <Touchable pressed={props.clicked} isDisabled={props.locked || false}>
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
    </Touchable>
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
