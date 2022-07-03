import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import LeaderboardScreen from "../screens/Leaderboard";
import StoreScreen from "../screens/Store";
import GameNavigator from "./GameNavigator";
const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      safeAreaInsets={{ bottom: 20, right: 20 }}
      screenOptions={({ route }) => ({
        tabBarColor: "#fff",
        tabBarIcon({ focused }) {
          let iconName: string = "";
          let IconPack: Function = Ionicons;
          if (route.name === "Categories") iconName = "apps";
          else if (route.name === "Leaderboard") iconName = "podium";
          else if (route.name === "Store") {
            IconPack = Fontisto;
            iconName = "shopping-bag-1";
          }
          return (
            <IconPack
              name={iconName}
              size={focused ? 25 : 20}
              color={focused ? "purple" : "#7e7e7e"}
            />
          );
        },
      })}
      activeColor="purple"
      inactiveColor="#eee"
      shifting={true}
      labeled={true}
      keyboardHidesNavigationBar={true}

      //   barStyle={{ height: 80 }}
      //   sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Categories"
        component={GameNavigator}
        options={{
          title: "Categories",
          //   tabBarColor: "#e6fcf5",
        }}
        // listeners
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          title: "Leaderboard",
          //   tabBarColor: "#e3fafc",
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          title: "Store",
          //   tabBarColor: "#fff4e6",
          tabBarBadge: "1",
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
