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

type GestureEvent = (event: GestureResponderEvent) => void;

interface Props {
  children: any;
  pressed: GestureEvent | Function;
  isDisabled?: boolean;
}

export default (props: Props) => {
  if (Platform.OS === "android" && Platform.Version >= 22) {
    return (
      <TouchableNativeFeedback
        disabled={props.isDisabled}
        onPress={props.pressed as GestureEvent}
      >
        {props.children}
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={props.isDisabled}
      onPress={props.pressed as GestureEvent}
    >
      {props.children}
    </TouchableOpacity>
  );
};
