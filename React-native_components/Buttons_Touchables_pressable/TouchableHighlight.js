import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableHighlight,
  } from "react-native";
  import React, { useState } from "react";
  import { Value } from "react-native-reanimated";
  //works the same as touchableOpacity expect that it displays a color when clicked
  // we can specify this color by using the underlay prop.
// its self closing.
  
  const TouchableHighlight = () => {
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
        <TouchableHighlight
          //accepts styling.
          style={styles.button}
          onPress={onPressHandler}
          // reduces the opacity when clicked and by default it's 0.2
          // we can modify it by using the active opacity prop i.e
          underlayColor = '#dddddd'
        >
          <Text Text style={styles.text}>
            {submitted ? "clear" : "submit"}
          </Text>
        </TouchableHighlight>
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
  export default TouchableHighlight;
  