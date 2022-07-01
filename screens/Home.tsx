import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home component</Text>
      <TextInput placeholder="tyuwido" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

// export default (
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={Home} />
//   </Stack.Navigator>
// );
