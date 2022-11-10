import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Value } from "react-native-reanimated";

const ButtonPrac = () => {
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
      <Button
        title={submitted ? "clear" : "submit"}
        //normally the title of the button is usually 'title'  but
        // here we set it to the value of the event
        //i.e if the button is clicked then the value is clear otherwise submit
        color="#a1a1a1"
        onPress={onPressHandler}
        //we give the onPress a function OnPressHandler. can be done either in line or dynamically
        // in line===== onPress={()=>{setSubmitted(!submitted)}}
      />
      {submitted ? (
        <Text style={styles.text}>You're registered as: {name}</Text>
      ) : null}
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
});
export default ButtonPrac;
