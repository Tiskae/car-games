import { createSlice } from "@reduxjs/toolkit";
import colors from "../../assets/colors";
import {
  MaterialIcons,
  Fontisto,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Games {
  games: Array<{
    id: string;
    title: string;
    backgColor: string;
    IconPack?: any;
    iconName?: string;
    locked?: boolean;
    progress?: number;
  }>;
  totalPoints: number;
  showTabBar: boolean;
}

// prettier-ignore
const initialState: Games = {games: [
    {id: "1", title: "Price Quiz", backgColor: colors.greenLight, IconPack: MaterialIcons, iconName: "attach-money", progress: 70},
    {id: "2", title: "True or false", backgColor: colors.cyanLight, progress: 10}, // default icon used
    {id: "3", title: "Logo quiz", backgColor: colors.greyLight, IconPack: Fontisto, iconName: "react", progress: 35},
    {id: "4", title: "Guess the car", backgColor: colors.yellowLight, IconPack: Ionicons, iconName: "car-sport-outline", locked: true, progress: 0},
    {id: "5", title: "Power Quiz", backgColor: colors.redLight, IconPack: FontAwesome, iconName: "superpowers", locked: true, progress: 0},
    {id: "6", title: "Speed Quiz", backgColor: colors.violetLight, IconPack: MaterialIcons, iconName: "speed", locked: true, progress: 70},
  ], totalPoints: 40, showTabBar: true};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    increaseProgress: (
      state: Games,
      action: PayloadAction<{ id: string; value: number }>
    ) => {
      const idx = state.games.findIndex(
        (game) => game.id === action.payload.id
      );
      state.games[idx].progress! += action.payload.value;
      state.totalPoints += 5;
    },
    toggleTabBar: (state: Games, action: PayloadAction<boolean>) => {
      state.showTabBar = action.payload;
    },
  },
});

export const { increaseProgress, toggleTabBar } = gameSlice.actions;

export default gameSlice.reducer;
