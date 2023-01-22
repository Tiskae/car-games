import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useToast } from "native-base";
import FormInput from "../components/UI/FormInput";
import Button from "../components/UI/Button";
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

  // useEffect(()=> {
  //   fetch(
  //     // "https://jsonplaceholder.typicode.com/todos/1",
  //     "https://abb5-102-89-41-181.eu.ngrok.io",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       // body: JSON.stringify({name: "Investor", password: "million_dollar", email: "investor@dollars.com"})
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  //     .catch(console.error);
  // }, [])

  const [authType, setAuthType] = useState<"login" | "register">("register"); // register | login
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const switchAuthTpe = () => {
    const newMode = authType === "login" ? "register" : "login";
    setAuthType(newMode);
  };

  const toast = useToast();

  return (
    <ImageBackground
      source={require("../assets/camaro.jpeg")}
      style={{ flex: 1 }}
    >
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
              <FormInput
                label="Username"
                type="text"
                warningMsg="Must be at least 3 characters"
                returnKeyType="next"
                value={username}
                onChange={(newVal: string) => setUsername(newVal)}
              />
            </View>
          )}

          <View style={styles.inputBox}>
            <FormInput
              label="Email"
              type="text"
              warningMsg="Invalid email address"
              keyboardType="email-address"
              returnKeyType="next"
              value={email}
              onChange={(newVal: string) => setEmail(newVal)}
            />
          </View>

          <View style={styles.inputBox}>
            <FormInput
              label="Password"
              type="password"
              warningMsg="Must be at least 3 characters"
              returnKeyType="done"
              value={password}
              onChange={(newVal: string) => setPassword(newVal)}
            />
          </View>

          <View style={styles.buttonField}>
            <Button
              isDisabled={isLoading}
              isLoading={isLoading}
              onPress={() => {
                console.log(username, email, password);
                // setIsLoading(true);
                // fetch("https://33cf-102-89-45-161.eu.ngrok.io", {
                //   method: "POST",
                //   headers: {
                //     "Content-Type": "application/json",
                //   },
                //   body: JSON.stringify({ username, email, password }),
                // })
                //   .then((res) => {
                //     console.log("res mi okoko", res);
                //     return res.json();
                //   })
                //   .then((response) => {
                //     // if
                //     console.log("response mi okoko", response);
                //   })
                //   .catch((err) => {
                //     toast.show({
                //       title: `Error ${err.statusCode}`,
                //       description: err.message,
                //       duration: 2000,
                //       // onCloseComplete() {
                //       //   console.log("game over!");
                //       // },
                //       // collapsable: true,
                //       backgroundColor: "#ff0000",
                //       placement: "bottom",
                //       // tintColor: "white"
                //     });
                //     console.error("catch error", err);
                //   })
                //   .finally(() => setIsLoading(false));
                navigation.navigate("APP")
              }}
            >
              {authType === "login" ? "Login" : "Sign up"}
            </Button>
          </View>
        </View>

        <View style={styles.switchAuth}>
          <Button onPress={switchAuthTpe} variant="link" size="lg">
            {authType === "register"
              ? "Aleady have an account? Login"
              : "Don't have an account? Sign up"}
          </Button>
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
    backgroundColor: "#fffffff8",
  },

  heading: {
    // marginBottom: 40,
  },
  headingText: {
    fontSize: 22,
    textTransform: "uppercase",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
    height: 330,
    marginVertical: 40,
  },

  inputBox: {
    width: "80%",
    marginBottom: 20,
  },
  buttonField: {
    width: "80%",
  },
  switchAuth: {
    // marginTop: 20,
  },
});
