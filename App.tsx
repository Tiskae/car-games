import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./navigation";

export default () => (
  <SafeAreaView style={{ flex: 1 }}>
    <NativeBaseProvider>
      <StatusBar style="dark" />
      <RootNavigator />
    </NativeBaseProvider>
  </SafeAreaView>
);
