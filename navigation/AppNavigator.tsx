import React from "react";
import { useSelector } from "react-redux";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import LeaderboardScreen from "../screens/Leaderboard/Leaderboard";
import StoreScreen from "../screens/Store/Store";
import GameNavigator from "./GameNavigator";
import GameCategories from "../screens/Games/GameCategories";

import { RootState } from "../store/index";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  const showTabBar = useSelector((state: RootState) => state.games.showTabBar);

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
          else if (route.name === "Settings") {
            IconPack = Fontisto;
            iconName = "player-settings"
          }
          return (
            <IconPack
              name={iconName}
              size={focused ? 25 : 20}
              color={focused ? "#000" : "#7e7e7e"}
            />
          );
        },
      })}
      activeColor="#000"
      inactiveColor="#eee"
      shifting={true}
      labeled={true}
      keyboardHidesNavigationBar={true}

      // barStyle = {()=> {

      // }}
      // barStyle={{
      //   borderTopColor: "#bbb",
      //   borderTopWidth: 2,
      //   // display: showTabBar ? "flex" : "none",
      // }}
      //   barStyle={{ height: 80 }}
      //   sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Categories"
        component={GameCategories}
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
            tabBarColor: "#e3fafc",
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          title: "Store",
            tabBarColor: "#fff4e6",
          tabBarBadge: "1",
        }}
      />
      {/* REVIEW  */}
      {/* <Tab.Screen
        name="Settings"
        component={StoreScreen}
        options={{
          title: "Settings",
            tabBarColor: "#e6fcf5",
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default AppNavigator;
