import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Value } from "react-native-reanimated";

const TouchableOpacity = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  onPressHandler = () => {
    setSubmitted(!submitted);
  };
  return (
    <View>
      <Text style={styles.text}>Please input your name:</Text>
      <TextInput
        color="#a1a1a1"
        style={styles.input}
        placeholder="your name"
        keyboardType="default"
        onChangeText={(value) => setName(value)}
        clearButtonMode="always"
      />
      {/* // begin */}
      <TouchableOpacity
        //accepts styling.
        style={styles.button}
        onPress={onPressHandler}
        // reduces the opacity when clicked and by default it's 0.2
        // we can modify it by using the active opacity prop i.e
        activeOpacity={0.8}
        // the lower the value the higher the opacity
      >
        <Text Text style={styles.text}>
          {submitted ? "clear" : "submit"}
        </Text>
      </TouchableOpacity>
      {submitted ? (
        <Text style={styles.text}>You're registered as: {name}</Text>
      ) : null}
      {/* //end */}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 20,
    width: "100%",
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "sans-serif",
    textDecorationColor: "#000000",
    fontStyle: "italic",
    fontSize: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "#000000",
    alignItems: "center",
    alignContent: "center",
  },
});
export default TouchableOpacity;
