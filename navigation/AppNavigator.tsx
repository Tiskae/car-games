import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/Home";
import GameCategoriesScreen from "../screens/GameCategories";
import LeaderboardScreen from "../screens/Leaderboard";
import UserProfileScreen from "../screens/UserProfile";
import colors from "../assets/colors";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarColor: colors.primary,
        tabBarIcon({ focused }) {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "GameCategories") iconName = "apps-outline";
          else if (route.name === "Leaderboard") iconName = "cellular-outline";
          else if (route.name === "UserProfile") iconName = "person-outline";
          return (
            <Ionicons
              name={iconName}
              size={focused ? 25 : 20}
              color={focused ? "black" : "#7e7e7e"}
            />
          );
        },
      })}
      activeColor="black"
      inactiveColor="#eee"
      labeled={true}
      keyboardHidesNavigationBar={true}

      //   barStyle={{ height: 80 }}
      //   sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="GameCategories"
        component={GameCategoriesScreen}
        options={{
          title: "Categories",
          tabBarColor: "#e6fcf5",
        }}
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
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          title: "Profile",
          tabBarColor: "#fff4e6",
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
