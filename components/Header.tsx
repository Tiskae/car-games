import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import Touchable from "./UI/Touchable";

import { RootState } from "../store/index";

interface Props {
  navigateToSettings: Function;
}

const Header = (props: Props) => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  const totalPoints = useSelector(
    (state: RootState) => state.games.totalPoints
  );

  useEffect(() => {
    const deviceStatusBarHeight = StatusBar.currentHeight as number;
    setStatusBarHeight(deviceStatusBarHeight);
  }, []);

  return (
    <View style={{ ...styles.container, paddingTop: statusBarHeight }}>
      <View style={styles.points}>
        <SimpleLineIcons name="trophy" color={"#222"} size={18} />
        <Text style={styles.pointText}>{totalPoints} points</Text>
      </View>
      <Touchable pressed={props.navigateToSettings}>
        <View
          style={{
            height: 40,
            width: 40,
            // backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fontisto name="player-settings" color={"#222"} size={27} />
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
    // paddingTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#222",
  },
  points: {
    // backgroundColor: colors.primary,
    backgroundColor: "#fff",
    borderColor: "#222",
    borderWidth: 2,
    padding: 7,
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
