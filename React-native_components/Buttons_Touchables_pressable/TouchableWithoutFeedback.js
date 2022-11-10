import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback
  } from "react-native";
  import React, { useState } from "react";
  import { Value } from "react-native-reanimated";
  // doesnt give user the sence of click nor does itshow the user it was clicked
  // doesnt accept styling but can be done inside view
  
  
  const     TouchableWithoutFeedback = () => {
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
        <TouchableWithoutFeedback         
          onPress={onPressHandler}
        >
        <View>
        style={styles.button}
        <Text Text style={styles.text}>
            {submitted ? "clear" : "submit"}
          </Text>
        </View>
         
        </TouchableWithoutFeedback>
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
  export default TouchableWithoutFeedback;
  