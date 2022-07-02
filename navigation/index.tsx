import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../assets/colors";

import AuthScreen from "../screens/Auth";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            title: "Sign up",
            headerShown: false,
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerShadowVisible: false,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="App"
          component={AppNavigator}
          options={{
            headerShown: false,
            headerBackVisible: false,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
