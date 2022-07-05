import React from "react";
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Progress } from "native-base";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import Touchable from "./UI/Touchable";
import colors from "../assets/colors";

interface Props {
  title: string;
  backgroundColor?: string;
  icon?: React.FunctionComponentElement<any>;
  locked?: boolean;
  clicked: (event: GestureResponderEvent) => void;
  progress?: number;
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
        <View style={styles.details}>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={{ fontSize: 18, textTransform: "uppercase" }}>
              {props.title}
            </Text>
          </View>
          <View>
            {props.icon || (
              <AntDesign name="question" size={50} color="black" />
            )}
          </View>
        </View>
        {!props.locked && (
          <View style={styles.progress}>
            <Progress
              backgroundColor={"#fff"}
              // color={"red"}
              colorScheme={"gray"}
              value={props.progress}
              size="sm"
            />
          </View>
        )}
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
    marginBottom: 10,
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
  },
  locked: {
    position: "absolute",
    bottom: 15,
    left: 25,
  },
});
