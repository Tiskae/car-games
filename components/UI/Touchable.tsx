import React from "react";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";

export default (props: { children: any }) => {
  const TouchableComp: Function =
    Platform.OS === "android" && Platform.Version >= 22
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return <TouchableComp>{props.children}</TouchableComp>;
};
