import React from "react";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  GestureResponderEvent,
  Alert,
  Text,
} from "react-native";

interface Props {
  children: any;
  pressed: (event: GestureResponderEvent) => void;
  isDisabled: boolean;
}

export default (props: Props) => {
  const TouchableComp: Function =
    Platform.OS === "android" && Platform.Version >= 22
      ? TouchableNativeFeedback
      : TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 22) {
    return (
      <TouchableNativeFeedback
        disabled={props.isDisabled}
        onPress={props.pressed}
      >
        {props.children}
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={props.isDisabled}
      onPress={props.pressed}
    >
      {props.children}
    </TouchableOpacity>
  );
};
