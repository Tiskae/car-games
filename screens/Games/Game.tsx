import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getGame } from "../../helpers";

interface Props {
  navigation: {};
  route: {
    params: {
      id: string;
      title: string;
    };
  };
}

const GameDetails = (props: Props) => {
  const { id, title } = props.route.params;
  const { game: Game, overview: GameOverview } = getGame(id);
  return (
    <View style={styles.container}>
      {/* <Text>{title}</Text> */}
      <GameOverview />
    </View>
  );
};

export default GameDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
