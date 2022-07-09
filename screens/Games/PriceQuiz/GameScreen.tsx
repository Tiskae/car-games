import { PresenceTransition } from "native-base";
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
  const car1 = Cars[0];
  const car2 = Cars[1];
  return (
    <View style={styles.container}>
      <View style={styles.headings}>
        <Text size="md" style={{ color: "#555" }}>
          Score: {0}
        </Text>
        <Text size="md" style={{ color: "#555" }}>
          High score: {"8"}
        </Text>
      </View>

      <PresenceTransition
        visible={true}
        initial={{ translateY: 300, opacity: 0, scale: 1 }}
        animate={{
          translateY: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            delay: 65,
            type: "spring",
            velocity: 20,
            friction: 10,
            overshootClamping: false,
          },
        }}
      >
        <View style={styles.content}>
          <Image
            source={require("../../../assets/camaro.jpeg")}
            height={100}
            width={100}
            resizeMode="cover"
            style={{
              height: 150,
              width: "100%",
              borderRadius: 15,
              shadowColor: "black",
              shadowOffset: { height: 1, width: 1 },
              shadowOpacity: 0.2,
            }}
          />
          <View style={styles.carDetails}>
            <Text center style={{ fontSize: 17, color: "#444" }}>
              {car1.name}
            </Text>
            <Text center style={{ fontSize: 17, color: "#444" }}>
              ${car1.price}
            </Text>
          </View>
        </View>
      </PresenceTransition>

      <View style={{ marginVertical: 10, alignItems: "center" }}>
        <Text size="lg" color="#666">
          VS
        </Text>
      </View>

      <PresenceTransition
        visible={true}
        initial={{ translateY: 300, opacity: 0, scale: 1 }}
        animate={{
          translateY: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            delay: 130,
            type: "spring",
            velocity: 20,
            friction: 10,
            overshootClamping: false,
          },
        }}
      >
        <View style={styles.content}>
          <Image
            source={require("../../../assets/mustang.jpeg")}
            height={100}
            width={100}
            resizeMode="cover"
            style={{
              height: 150,
              width: "100%",
              borderRadius: 15,
              shadowColor: "black",
              shadowOffset: { height: 1, width: 1 },
              shadowOpacity: 0.2,
            }}
          />
          <View style={styles.carDetails}>
            <Text center style={{ fontSize: 17, color: "#444" }}>
              {car2.name}
            </Text>
            <Text center style={{ fontSize: 17, color: "#444" }}>
              {/* ${car2.price} */}?
            </Text>
          </View>
        </View>
      </PresenceTransition>
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  content: {
    // marginBottom: 30,
    borderBottomWidth: 2,
    borderColor: "#e3e3e3",
    borderRadius: 15,
  },
  carDetails: {
    // backgroundColor: "purple",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
});
