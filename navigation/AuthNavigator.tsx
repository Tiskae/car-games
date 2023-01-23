import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/Auth/Auth";
import ForgotPassword from "../screens/Auth/ForgotPassword";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AUTH_SCREEN"
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: "#fff",
        // },
        headerTintColor: "#222",
        headerTitleStyle: { fontWeight: "500" },
        animation: "slide_from_left",
        headerShown: false,
      }}
    >
      <Stack.Screen name="AUTH_SCREEN" component={AuthScreen} />
      <Stack.Screen
        name="FORGOT_PASSWORD"
        component={ForgotPassword}
        options={{
          headerShown: true,
          headerTitle: "Forgot password",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
