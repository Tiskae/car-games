import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default GameDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
