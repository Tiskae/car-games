import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GameCategories from "../screens/Games/GameCategories";
import GameDetails from "../screens/Games/Game";

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="GameCategories"
        component={GameCategories}
        // options={{ transitionSpec: { open: config, close: config } }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetails}
        // options={{ transitionSpec: { open: config, close: config } }}
      />
    </Stack.Navigator>
  );
};

export default GameNavigator;
