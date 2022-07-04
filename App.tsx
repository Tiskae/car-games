import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./navigation";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <RootNavigator />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};
