import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";

import Text from "../../../components/UI/Text";

import Cars from "../../../models/Cars";

interface Props {
  navigation: {
    navigate: Function;
  };
  route: {
    params: {
      level: string | number;
    };
  };
}

const GameScreen = (props: Props) => {
  const car = Cars[0];
  return (
    <View style={styles.container}>
      <View style={styles.headings}>
        <Text size="lg" bold upper style={{ letterSpacing: 1 }}>
          Price Quiz
        </Text>
        <Text size="md" style={{ color: "#555" }}>
          Round 1
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/camaro.jpeg")}
          height={100}
          width={100}
          resizeMode="cover"
          style={{
            height: 200,
            width: "100%",
            borderRadius: 5,
            shadowColor: "black",
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 0.2,
          }}
        />
        <Text center style={{ fontSize: 22 }}>
          {car.name}
        </Text>
        <Text center style={{ fontSize: 20, color: "#444" }}>
          ${car.price}
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button
          color={"red"}
          title="Lower"
          // onPress={() => props.navigation.navigate("GameOverview")}
        />
        <Button
          title="Higher"
          // onPress={() => props.navigation.navigate("GameOverview")}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "column",
  },
  headings: {
    alignItems: "center",
  },
  content: { marginVertical: 30 },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
