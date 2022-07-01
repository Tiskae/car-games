import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import RootNavigator from "./navigation";

export default () => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar style="dark" />
    <RootNavigator />
  </SafeAreaView>
);
