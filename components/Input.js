import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return <TextInput style={styles.numberInput} {...props} />;
};

const styles = StyleSheet.create({
  numberInput: {
    width: 50,
    borderColor: "#ccc",
    borderWidth: 0.7,
    marginVertical: 15,
    textAlign: "center",
  },
});

export default Input;
