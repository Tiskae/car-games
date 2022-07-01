import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AuthScreen from "../screens/auth";
import Home from "../screens/Home";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home1" component={AuthScreen} />
      <Tab.Screen name="Home2" component={AuthScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
