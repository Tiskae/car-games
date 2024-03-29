import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GameNavigator from "./GameNavigator";
import SettingsScreen from "../screens/Settings";
import Header from "../components/Header";
import AuthNavigator from "./AuthNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AUTH"
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: "#fff",
          // },
          headerTintColor: "#222",
          headerTitleStyle: { fontWeight: "500" },
          animation: "slide_from_right",
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AUTH"
          component={AuthNavigator}
          options={{
            title: "Sign up",
            // headerStyle: {
            //   backgroundColor: colors.primary,
            // },
            // headerShadowVisible: false,
            // headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="APP"
          component={GameNavigator}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerBackVisible: false,
            headerShadowVisible: true,
            title: "Car Games",
            header(props) {
              // console.log(props);
              return (
                <Header
                  navigateToSettings={() =>
                    props.navigation.navigate("Settings")
                  }
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="SETTINGS"
          component={SettingsScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
