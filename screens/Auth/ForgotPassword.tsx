import { Button } from "native-base";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormInput from "../../components/UI/FormInput";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <FormInput
          label="Email"
          type="text"
          warningMsg="Please enter a valud email"
          returnKeyType="done"
          value={email}
          onChange={(newVal: string) => setEmail(newVal)}
          keyboardType="email-address"
        />
      </View>
      <Button
        onPress={() => {}}
        variant="solid"
        size="lg"
        isDisabled={false}
        isLoading={false}
      >
        Send
      </Button>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "80%",
    marginBottom: 20,
  },
});
