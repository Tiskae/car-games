import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import colors from "../assets/colors";

const AuthScreen = ({
  navigation,
}: {
  navigation: { navigate: Function };
}): JSX.Element => {
  useEffect(() => {
    if (false) {
      navigation.navigate("App");
    }
  }, []);

  const [authType, setAuthType] = useState("register"); // register | login

  const switchAuthTpe = () => {
    const newMode = authType === "login" ? "register" : "login";
    setAuthType(newMode);
  };

  return (
    <ImageBackground source={require("..//camaro.jpeg")} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>
            {authType === "login"
              ? "Login to your account"
              : "Create an account"}
          </Text>
        </View>

        <View style={styles.content}>
          {authType === "register" && (
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                placeholder=""
                style={styles.inputField}
                keyboardType={"default"}
                returnKeyType="next"
              />
            </View>
          )}

          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              placeholder=""
              style={styles.inputField}
              keyboardType="email-address"
              returnKeyType="next"
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              placeholder=""
              style={styles.inputField}
              secureTextEntry={true}
              returnKeyType="done"
            />
          </View>

          <View style={styles.buttonField}>
            <Button
              title={authType === "login" ? "Login" : "Sign up"}
              color={colors.primary}
              disabled={false}
              onPress={() => navigation.navigate("App")}
            />
          </View>
        </View>

        <View style={styles.switchAuth}>
          <TouchableOpacity onPress={switchAuthTpe} activeOpacity={0.4}>
            <>
              {authType === "register" && (
                <Text>Aleady have an account? Login</Text>
              )}
              {authType === "login" && (
                <Text>Don't have an account? Sign up</Text>
              )}
            </>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#fffffff3",
  },

  heading: {
    marginBottom: 40,
  },
  headingText: {
    fontSize: 22,
    textTransform: "uppercase",
  },
  content: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },

  inputBox: {
    width: "80%",
  },
  inputLabel: {
    fontSize: 15,
  },
  inputField: {
    borderColor: colors.primary,
    fontSize: 15,
    borderWidth: 2,
    marginBottom: 20,
    padding: 10,
    paddingHorizontal: 10,
  },
  buttonField: {
    width: "80%",
  },
  switchAuth: {
    marginTop: 40,
  },
});
