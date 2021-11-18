import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TitleText = ({ children, style }) => {
  return <Text style={{ ...styles.titleText, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default TitleText;
