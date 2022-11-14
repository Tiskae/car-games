import { PresenceTransition, Button, useToast } from "native-base";
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
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
  pressed,
  isCorrect,
  completed,
  completedWrong,
}: {
  carName: string;
  price: number;
  revealPrice: boolean;
  carPosition: number;
  imageSrc: string;
  pressed: Function;
  isCorrect: boolean;
  completed: boolean;
  completedWrong: boolean;
}) => {
  return (
    <Touchable pressed={pressed} isDisabled={completed}>
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
        <View
          style={{
            ...styles.card,
            borderWidth: 2,
            borderColor:
              (isCorrect && "green") ||
              (completedWrong && "red") ||
              "transparent",
          }}
        >
          <Image
            source={{ uri: imageSrc }}
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
              style={{
                ...styles.card__text,
                opacity: revealPrice || completed ? 1 : 0,
                backgroundColor: completedWrong || !isCorrect ? "red" : "green",
                color: "#fff",
                padding: 5,
              }}
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
  const [correctAnswer, setCorrectAnswer] = useState<null | 1 | 2>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const car1 = Cars[currentQuestion - 1];
  const car2 = Cars[currentQuestion];

  const toast = useToast();
  const toastIdRef = useRef();

  const nextQuestion = () => {
    setShowHint(false);
    setCorrectAnswer(null);
    setCurrentQuestion((old) => {
      return Cars.length >= old + 2 ? old + 2 : 1;
    });
  };

  const gameOverHandler = () => {
    toast.show({
      title: "Game over: you got it wrong",
      description: "The car has the lower price of the two",
      duration: 3000,
      onCloseComplete() {
        console.log("game over!");
      },
      collapsable: true,
      backgroundColor: "#ff0000",
      placement: "bottom",
      // tintColor: "white"
    });
    setGameOver(true);
  };

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return;
    }
    if (!userAnswer) return;
    const correctAnswr = car1.price > car2.price ? 1 : 2;
    const isDraw = car1.price === car2.price;
    const isCorrect = userAnswer === correctAnswr;
    setCorrectAnswer(correctAnswr);
    if (isCorrect || isDraw) {
      setGameScore((old) => old + 1);
    } else {
      return gameOverHandler();
    }
    setTimeout(nextQuestion, 1000);
  }, [userAnswer]);

  useEffect(() => {
    setUserAnswer(null);
  }, [currentQuestion]);

  useEffect(() => {
    if (firstLoad) return;

    setTimeout(() => props.navigation.navigate("GameOverview"), 2000);
  }, [gameOver]);

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
        pressed={() => setUserAnswer(1)}
        isCorrect={correctAnswer === 1}
        completed={!!userAnswer}
        completedWrong={userAnswer === 1 && userAnswer !== correctAnswer}
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
        pressed={() => setUserAnswer(2)}
        isCorrect={correctAnswer === 2}
        completed={!!userAnswer}
        completedWrong={userAnswer === 2 && userAnswer !== correctAnswer}
      />

      <View style={styles.hint}>
        <Button onPress={() => setShowHintModal(true)} isDisabled={showHint || gameOver}>
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

      {/* {gameOver && <Toast} */}
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
    // elevation: 1,
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
