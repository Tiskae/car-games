import GuessTheCar from "../screens/Games/GuessTheCar/GameScreen";
import GuessTheCarOverview from "../screens/Games/GuessTheCar/Overview";

import LogoQuiz from "../screens/Games/LogoQuiz/GameScreen";
import LogoQuizOverview from "../screens/Games/LogoQuiz/Overview";

import PowerQuiz from "../screens/Games/PowerQuiz/GameScreen";
import PowerQuizOverview from "../screens/Games/PowerQuiz/Overview";

import PriceQuiz from "../screens/Games/PriceQuiz/GameScreen";
import PriceQuizOverview from "../screens/Games/PriceQuiz/Overview";

import SpeedQuiz from "../screens/Games/SpeedQuiz/GameScreen";
import SpeedQuizOverview from "../screens/Games/SpeedQuiz/Overview";

import TrueOrFalse from "../screens/Games/TrueOrFalse/GameScreen";
import TrueOrFalseOverview from "../screens/Games/TrueOrFalse/Overview";

// id: "1", title: "Price Quiz"
// id: "2", title: "True or false"
// id: "3", title: "Logo quiz"
// id: "4", title: "Guess the car"
// id: "5", title: "Power Quiz"
// id: "6", title: "Speed Quiz"

type Game = {
  game: Function;
  overview: Function;
};

export const getGame = (id: string): Game => {
  let game: Game;

  switch (id) {
    case "1":
      game = {
        game: PriceQuiz,
        overview: PriceQuizOverview,
      };
      break;
    case "2":
      game = {
        game: TrueOrFalse,
        overview: TrueOrFalseOverview,
      };
      break;
    case "3":
      game = {
        game: LogoQuiz,
        overview: LogoQuizOverview,
      };
      break;
    case "4":
      game = {
        game: GuessTheCar,
        overview: GuessTheCarOverview,
      };
      break;
    case "5":
      game = {
        game: PowerQuiz,
        overview: PowerQuizOverview,
      };
      break;
    case "6":
      game = {
        game: SpeedQuiz,
        overview: SpeedQuizOverview,
      };
      break;
    default:
      game = {
        game: PriceQuiz,
        overview: PriceQuizOverview,
      };
  }

  return game;
};
