import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "native-base";
import { ThemeComponentSizeType, ColorSchemeType } from "native-base/lib/typescript/components/types";

type ButtonProps = {
  children: string;
  onPress: Function;
  isDisabled: boolean;
  size?: ThemeComponentSizeType<"Button">;
  variant?: "ghost" | "outline" | "solid" | "subtle" | "link" | "unstyled";
  colorScheme?: ColorSchemeType;
  isLoading?: boolean
};

const ButtonComp = ({
  children,
  onPress,
  isDisabled,
  size,
  variant,
  colorScheme,
  isLoading
}: ButtonProps) => {
  return (
      <Button
      size={size}
      // @ts-ignore
      onPress={onPress}
      disabled={isDisabled}
      variant={variant}
      colorScheme={"lightBlue"}
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
