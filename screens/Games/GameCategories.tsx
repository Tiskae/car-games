import React, { useEffect } from "react";
import {
  MaterialBottomTabScreenProps,
  MaterialBottomTabNavigationOptions,
} from "@react-navigation/material-bottom-tabs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { StyleSheet, ScrollView } from "react-native";
import colors from "../../assets/colors";
import GameBox from "../../components/GameBox";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  Fontisto,
} from "@expo/vector-icons";
import { Button } from "native-base";
import { increaseProgress, toggleTabBar } from "../../store/slices/games";

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

const GameCategories = (props: MaterialBottomTabScreenProps<any>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("blur", (e: any) => {
      // e.preventDefault();
      console.log("blur");
    });
    // props.navigation.setOptions({ tabBarLabel: "Yay!"});

    // dispatch(toggleTabBar(false));

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", (e: any) => {
      console.log("Focus");
      props.navigation.setOptions({ tabBarBadge: "2" });
      props.navigation.setOptions({ tabBarColor: "#0f0" });
    });

    return unsubscribe;
  }, []);

  const navigateToGame = (id: string, title: string) => {
    props.navigation.navigate("GameDetails", { id, title });
  };

  const games1 = useSelector((state: RootState) => state.games);
  const increaseProgessHandler = () => {
    dispatch(increaseProgress({ id: "1", value: 4 }));
  };

  return (
    <ScrollView style={styles.container} scrollEnabled={true}>
      {/* <Button onPress={increaseProgessHandler}>
        Increase Price Quiz Progress
      </Button> */}

      {games1.games.map((game) => {
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

// GameCategories.screenOptions = {

// } ;

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
