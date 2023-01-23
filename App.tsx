import React from "react";
import { SafeAreaView } from "react-native";

import { NativeBaseProvider } from "native-base";
import RootNavigator from "./navigation";


// Babel check for mobx - https://mobx.js.org/installation.html
if (
  !new (class {
    x: any;
  })().hasOwnProperty("x")
)
  throw new Error("Transpiler is not configured correctly");

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <RootNavigator />
        </NativeBaseProvider>
    </SafeAreaView>
  );
};
