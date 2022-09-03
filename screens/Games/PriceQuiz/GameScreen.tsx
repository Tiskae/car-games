import { PresenceTransition, AlertDialog, Button} from "native-base";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import Touchable from "../../../components/UI/Touchable";

import Text from "../../../components/UI/Text";
import AlertModal from "../../../components/UI/AlertModal";

import Cars from "../../../models/Cars";

const CarCard = ({
  carName,
  price,
  revealPrice,
  carPosition,
  imageSrc,
  pressed
}: {
  carName: string;
  price: number;
  revealPrice: boolean;
  carPosition: number;
  imageSrc: string;
  pressed: Function;
}) => {
  return (
    <Touchable pressed={pressed}>
      <PresenceTransition
        visible={true}
        initial={{ translateY: 300, opacity: 0, scale: 1 }}
        animate={{
          translateY: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            delay: 65 * carPosition,
            type: "spring",
            velocity: 20,
            friction: 10,
            overshootClamping: false,
          },
        }}
      >
        <View style={styles.card}>
          <Image
            source={{uri: imageSrc}}
            height={100}
            width={100}
            resizeMode="cover"
            style={styles.card__image}
          />
          <View style={styles.card__details}>
            <Text size="md" center style={styles.card__text}>
              {carName}
            </Text>
            {/* {revealPrice && ( */}
            <Text
              size="md"
              center
              style={{ ...styles.card__text, opacity: revealPrice ? 1 : 0, backgroundColor: "green", color: "#fff", padding: 5 }}
            >
              ${price}
            </Text>
            {/* )} */}
          </View>
        </View>
      </PresenceTransition>
    </Touchable>
  );
};

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
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [showHintModal, setShowHintModal] = useState<boolean>(false);
  const [gameScore, setGameScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<null | 1 | 2>(null);
  
  const car1 = Cars[currentQuestion - 1];
  const car2 = Cars[currentQuestion];

  const nextQuestion = ()=> {
    setShowHint(false);
    // setUserAnswer(null);
    setCurrentQuestion(old => {
      return Cars.length >= old + 2 ? old + 2: 1})
  }

  useEffect(()=> {
    if (firstLoad) {
      setFirstLoad(false);
      return;
    };
    // if (typeof(userAnswer) === "number") return;

    let isCorrect = userAnswer === 1;
    if (isCorrect) setGameScore(old => old + 1);
    nextQuestion();
  }, [userAnswer])
  

  return (
    <View style={styles.container}>
      <View style={styles.headings}>
        <Text size="md" style={{ color: "#555" }}>
          Score: {gameScore}
        </Text>
        <Text size="md" style={{ color: "#555" }}>
          High score: {"8"}
        </Text>
      </View>

      <View>
        <Text size="lg" center style={{ marginBottom: 20 }}>
          Which car is more expensive?
        </Text>
      </View>

      <CarCard
        carName={car1.name}
        carPosition={1}
        imageSrc={car1.imageUrl}
        price={car1.price}
        revealPrice={showHint}
        pressed={()=> setUserAnswer(1)}
      />

      <View style={{ marginVertical: 10, alignItems: "center" }}>
        <Text size="lg" color="#666">
          VS
        </Text>
      </View>

      <CarCard
        carName={car2.name}
        carPosition={2}
        imageSrc={car2.imageUrl}
        price={car2.price}
        revealPrice={false}
        pressed={()=> setUserAnswer(2)}
      />

      <View style={styles.hint}>
        <Button onPress={() => setShowHintModal(true)} isDisabled={showHint}>
          {"Hint :)"}
        </Button>
      </View>



      <AlertModal
        heading="Hint"
        body="Show the price of the first car for 1 hint coin"
        show={showHintModal}
        onClose={() => setShowHintModal(false)}
        onSuccess={() => {
          setShowHint(true);
          setShowHintModal(false);
        }}
        successBtnLabel="Show hint"
      />
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
  card: {
    // borderRadius: 1,
    elevation: 1,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.2,
  },
  card__image: {
    height: 150,
    width: "100%",
  },
  card__details: {
    // backgroundColor: "purple",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  card__text: {
    color: "#5c5c5c",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  hint: {
    alignSelf: "flex-end",
    marginTop: 20,
  },
});
