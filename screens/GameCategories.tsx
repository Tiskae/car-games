import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from "../assets/colors";
import GameBox from "../components/GameBox";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  Fontisto,
} from "@expo/vector-icons";

interface Props {
  navigation: {
    navigate: Function;
  };
}

type Games = Array<{
  id: string;
  title: string;
  backgColor: string;
  IconPack?: any;
  iconName?: string;
  locked?: boolean;
}>;

// prettier-ignore
const games: Games = [
  {id: "1", title: "Price Quiz", backgColor: colors.greenLight, IconPack: MaterialIcons, iconName: "attach-money"},
  {id: "2", title: "True or false", backgColor: colors.cyanLight}, // default icon used
  {id: "3", title: "Logo quiz", backgColor: colors.greyLight, IconPack: Fontisto, iconName: "react"},
  {id: "4", title: "Guess the car", backgColor: colors.yellowLight, IconPack: Ionicons, iconName: "car-sport-outline", locked: true},
  {id: "5", title: "Power Quiz", backgColor: colors.redLight, IconPack: FontAwesome, iconName: "superpowers", locked: true},
  {id: "6", title: "Speed Quiz", backgColor: colors.violetLight, IconPack: MaterialIcons, iconName: "speed", locked: true},
  
];

const GameCategories = (props: Props) => {
  const navigateToGame = (id: string, title: string) => {
    props.navigation.navigate("GameDetails", { id, title });
  };

  return (
    <ScrollView style={styles.container} scrollEnabled={true}>
      {games.map((game) => {
        const IconPack = game.IconPack;
        return (
          <GameBox
            key={game.id}
            title={game.title}
            backgroundColor={game.backgColor}
            icon={
              IconPack && (
                <IconPack name={game.iconName} size={50} color="black" />
              )
            }
            clicked={() => navigateToGame(game.id, game.title)}
          />
        );
      })}
    </ScrollView>
  );
};

export default GameCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 20,
    flex: 1,
  },
});
