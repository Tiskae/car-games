import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

const AnimatedView = (props: { children: any; style?: object }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ opacity: fadeAnim, ...props.style }}>
      {props.children}
    </Animated.View>
  );
};

export default AnimatedView;
