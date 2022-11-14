import React from "react";
import { SafeAreaView } from "react-native";

import { NativeBaseProvider } from "native-base";
import RootNavigator from "./navigation";

import { store } from "./store";
import { Provider } from "react-redux";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NativeBaseProvider>
          <RootNavigator />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaView>
  );
};
