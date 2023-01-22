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

type TouchableProps  = {
  children: any;
  pressed: GestureEvent | Function;
  isDisabled?: boolean;
}

export default ({isDisabled, pressed, children}: TouchableProps) => {
  if (Platform.OS === "android" && Platform.Version >= 22) {
    return (
      <TouchableNativeFeedback
        disabled={isDisabled}
        onPress={pressed as GestureEvent}
      >
        {children}
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isDisabled}
      onPress={pressed as GestureEvent}
    >
      {children}
    </TouchableOpacity>
  );
};
