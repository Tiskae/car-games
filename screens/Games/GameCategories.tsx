import React from "react";
import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { StyleSheet, ScrollView } from "react-native";
import GameBox from "../../components/GameBox";
import { increaseProgress } from "../../store/slices/games";

const GameCategories = (props: MaterialBottomTabScreenProps<any>) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = props.navigation.addListener("blur", (e: any) => {
  //     // e.preventDefault();
  //     console.log("blur");
  //   });
  //   // props.navigation.setOptions({ tabBarLabel: "Yay!"});

  //   // dispatch(toggleTabBar(false));

  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = props.navigation.addListener("focus", (e: any) => {
  //     console.log("Focus");
  //     props.navigation.setOptions({ tabBarBadge: "2" });
  //     props.navigation.setOptions({ tabBarColor: "#0f0" });
  //   });

  //   return unsubscribe;
  // }, []);

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

      {games1.games.map((game, idx, arr) => {
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
            isLast={idx === arr.length - 1}
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
    // backgroundColor: "cyan",
    flexDirection: "column",
    // marginTop: 20,
    // paddingBottom: 140,
    padding: 20,
    flex: 1,
  },
});
