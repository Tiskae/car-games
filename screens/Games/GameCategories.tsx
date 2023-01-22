import React, { FunctionComponentElement, useEffect, useState } from "react";
import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import {
  MaterialIcons,
  Fontisto,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { StyleSheet, ScrollView , Text} from "react-native";
import GameBox from "../../components/GameBox";
import GamesStore from "../../mobx/gamesStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

const GameCategories = (props: MaterialBottomTabScreenProps<any>) => {
  const [focus, setFocus] = useState(false);

  const allGames = toJS(GamesStore.games);

  useEffect(() => setFocus(true), []);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("blur", (e: any) => {
      // console.log(e);
      setFocus(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", (e: any) => {
      setFocus(true);
    });

    return unsubscribe;
  }, []);

  const navigateToGame = (id: string, title: string) => {
    props.navigation.navigate("GameDetails", { id, title });
  };

  // const allGames = useSelector((state: RootState) => state.games);
  // const increaseProgessHandler = () => {
  //   dispatch(increaseProgress({ id: "1", value: 4 }));
  // };


  return (
    <ScrollView style={styles.container} scrollEnabled={true}>
      {/* <Button onPress={increaseProgessHandler}>
        Increase Price Quiz Progress
      </Button> */}


      {allGames.map((game, idx, arr) => {
        console.log(game);
        const iconPack = game.icon.pack;

        let IconPack: any;
        if (iconPack === "antDesign") IconPack = AntDesign;
        if(iconPack === "fontawesome")  IconPack = FontAwesome;
        if(iconPack === "fontisto")  IconPack = Fontisto;
        if(iconPack === "ionicons")  IconPack = Ionicons;
        if(iconPack === "materialIcons" ) IconPack = MaterialIcons;

        return (
          <GameBox
            key={game.id}
            id={idx}
            title={game.title}
            backgroundColor={game.backgColor}
            Icon={<IconPack name={game.icon.name} size={50} color="#222" />}
            clicked={() => navigateToGame(game.id, game.title)}
            locked={game.locked}
            progress={game.progress}
            highScore={game.highScore}
            isLast={idx === arr.length - 1}
            focus={focus}
          />
        );
      })}
    </ScrollView>
  );
};

// GameCategories.screenOptions = {

// } ;

export default observer(GameCategories);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    flexDirection: "column",
    // marginTop: 20,
    // paddingBottom: 140,
    padding: 20,
    flex: 1,
  },
});
