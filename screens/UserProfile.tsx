import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text>User profile component</Text>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
