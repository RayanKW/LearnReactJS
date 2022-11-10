import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Pressable,
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
        <Pressable
                  onPress={onPressHandler}
                  hitSlop={{top:10, bottom:10, right:10, left:10}}
                  android_ripple={{color='#000000'}}
                  style={({pressed})=>[
                    {backgroundColor: pressed ? '#aaaaaa' : '#b3b3'},
                    styles.button
                  ]}
        >
          <Text Text style={styles.text}>
            {submitted ? "clear" : "submit"}
          </Text>
        </Pressable>
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
  