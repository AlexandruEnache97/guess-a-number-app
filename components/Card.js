import React from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 15,
    elevation: 3,
    backgroundColor: "#fff",
  },
});

export default Card;
