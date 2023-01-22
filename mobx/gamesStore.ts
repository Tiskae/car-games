import { observable, makeObservable, action } from "mobx";
import { GameType } from "./types";
import colors from "../assets/colors";

class GamesStore {
  // prettier-ignore
  games: GameType[] = [
    {id: "1", title: "Price Quiz", backgColor: colors.greenLight, highScore: 10,
              icon: {pack: "materialIcons", name: "attach-money"}},
    {id: "2", title: "True or false", backgColor: colors.cyanLight, highScore: 8,
              icon: {pack: "antDesign", name: "question"}},
    {id: "3", title: "Logo quiz", backgColor: colors.greyLight,  progress: 35, locked: false,
              icon: {pack: "fontisto", name: "react"},},
    {id: "4", title: "Guess the car", backgColor: colors.yellowLight,  locked: false, highScore: 13,
              icon: {pack: "ionicons", name: "car-sport-outline"},},
    {id: "5", title: "Power Quiz", backgColor: colors.redLight, locked: false, highScore: 3,
              icon: {pack: "fontawesome", name: "superpowers"}},
    {id: "6", title: "Speed Quiz", backgColor: colors.violetLight, locked: false,highScore: 1 ,
              icon:{pack: "materialIcons", name: "speed"},},
  ]
  totalPoints: number = 40;

  constructor() {
    makeObservable(this, {
      games: observable,
      totalPoints: observable,
      increaseGameProgress: action,
      setNewGameHighscore: action,
      unlockGame: action,
    });
  }

  setNewGameHighscore(gameId: string, newScore: number) {
    const idx = this.games.findIndex((game) => game.id === gameId);
    if (idx === -1) return;

    this.games[idx].highScore = newScore;
  }

  increaseGameProgress(gameId: string, value: number) {
    const idx = this.games.findIndex((game) => game.id === gameId);
    if (idx === -1) return;

    this.games[idx].progress! += value;
    this.totalPoints += 5;
  }

  unlockGame(gameId: string) {
    const idx = this.games.findIndex((game) => game.id === gameId);
    if (idx === -1) return;

    this.games[idx].locked = false;
  }
}

export default new GamesStore();
