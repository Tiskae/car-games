import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import Touchable from "./UI/Touchable";
import colors from "../assets/colors";

interface Props {
  navigateToSettings: Function;
}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.points}>
        <SimpleLineIcons name="trophy" color={"#222"} size={18} />
        <Text style={styles.pointText}>200 points</Text>
      </View>
      <Touchable pressed={props.navigateToSettings}>
        <View>
          {/* <Text>Settings</Text> */}
          <Fontisto name="player-settings" color={"#222"} size={25} />
        </View>
      </Touchable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 0,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },
  points: {
    // backgroundColor: colors.primary,
    backgroundColor: "#fff",
    borderColor: "#222",
    borderWidth: 2,
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 100,
    flexDirection: "row",
  },
  pointText: {
    color: "#222",
    marginLeft: 10,
    fontWeight: "700",
    // fontSize: 16,
  },
});
