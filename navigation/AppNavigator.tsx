import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import GameCategoriesScreen from "../screens/GameCategories";
import LeaderboardScreen from "../screens/Leaderboard";
import StoreScreen from "../screens/Store";
import colors from "../assets/colors";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarColor: "#fff",
        tabBarIcon({ focused }) {
          let iconName: string = "";
          let IconPack: Function = Ionicons;
          if (route.name === "GameCategories") iconName = "apps-outline";
          else if (route.name === "Leaderboard") iconName = "podium-outline";
          else if (route.name === "Store") {
            IconPack = Fontisto;
            iconName = "shopping-bag-1";
          }
          return (
            <IconPack
              name={iconName}
              size={focused ? 25 : 20}
              color={focused ? "black" : "#7e7e7e"}
            />
          );
        },
      })}
      activeColor="black"
      inactiveColor="#eee"
      shifting={true}
      labeled={true}
      keyboardHidesNavigationBar={true}

      //   barStyle={{ height: 80 }}
      //   sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="GameCategories"
        component={GameCategoriesScreen}
        options={{
          title: "Categories",
          //   tabBarColor: "#e6fcf5",
        }}
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
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
