import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { getGame } from "../../helpers";
import { toggleTabBar } from "../../store/slices/games";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

interface Props {
  navigation: {};
  route: {
    params: {
      id: string;
      title: string;
    };
  };
}

const Stack = createNativeStackNavigator();

const GameDetails = (props: Props) => {
  const { id, title } = props.route.params;
  const { game: Game, overview: GameOverview } = getGame(id);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(toggleTabBar());
  // }, []);

  return (
    // <View style={styles.container}>
    //   {/* <Text>{title}</Text> */}
    //   <GameOverview />
    // </View>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GameOverview" component={GameOverview} />
      <Stack.Screen name="GameScreen" component={Game} />
    </Stack.Navigator>
  );
};

export default GameDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
