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

const GameCategories = () => {
  return (
    <ScrollView style={styles.container} scrollEnabled={true}>
      <GameBox
        title="Price quiz"
        backgroundColor={colors.greenLight}
        icon={<MaterialIcons name="attach-money" size={50} color="black" />}
      />
      <GameBox title="True or false" backgroundColor={colors.cyanLight} />
      <GameBox
        title="Logo quiz"
        backgroundColor={colors.greyLight}
        icon={<Fontisto name="react" size={50} color="black" />}
      />
      <GameBox
        title="Guess the car"
        backgroundColor={colors.orangeLight}
        icon={<Ionicons name="car-sport-outline" size={50} color="black" />}
        locked
      />
      <GameBox
        title="Power quiz"
        backgroundColor={colors.redLight}
        icon={<FontAwesome name="superpowers" size={50} color="black" />}
        locked
      />
      <GameBox
        title="Speed quiz"
        backgroundColor={colors.violetLight}
        icon={<MaterialIcons name="speed" size={50} color="black" />}
        locked
      />
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
