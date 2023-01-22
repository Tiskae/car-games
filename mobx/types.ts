export type IconType =
  | "materialIcons"
  | "antDesign"
  | "fontisto"
  | "ionicons"
  | "fontawesome";

export interface GameType {
  id: string;
  title: string;
  backgColor: string;
  icon: {
    pack: IconType;
    name: string;
  };
  locked?: boolean;
  progress?: number; // only Logo quiz has progress
  highScore?: number; // all other games use highScore instead
}
