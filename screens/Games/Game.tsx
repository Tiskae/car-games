import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getGame } from "../../helpers";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import AppStore from "../../mobx/appStore";

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


    useEffect(() => {
      console.log(AppStore);
  }, []);

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

export default observer(GameDetails);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
