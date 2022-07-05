import React from "react";
import { StyleSheet, ScrollView } from "react-native";
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
  progress?: number;
}>;

// prettier-ignore
const games: Games = [
  {id: "1", title: "Price Quiz", backgColor: colors.greenLight, IconPack: MaterialIcons, iconName: "attach-money", progress: 70},
  {id: "2", title: "True or false", backgColor: colors.cyanLight, progress: 10}, // default icon used
  {id: "3", title: "Logo quiz", backgColor: colors.greyLight, IconPack: Fontisto, iconName: "react", progress: 35},
  {id: "4", title: "Guess the car", backgColor: colors.yellowLight, IconPack: Ionicons, iconName: "car-sport-outline", locked: true, progress: 0},
  {id: "5", title: "Power Quiz", backgColor: colors.redLight, IconPack: FontAwesome, iconName: "superpowers", locked: true, progress: 0},
  {id: "6", title: "Speed Quiz", backgColor: colors.violetLight, IconPack: MaterialIcons, iconName: "speed", locked: true, progress: 70},
  
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
                <IconPack name={game.iconName} size={50} color="#222" />
              )
            }
            clicked={() => navigateToGame(game.id, game.title)}
            locked={game.locked}
            progress={game.progress}
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
    // marginTop: 20,
    // paddingTop: 0,
    padding: 20,
    flex: 1,
  },
});
