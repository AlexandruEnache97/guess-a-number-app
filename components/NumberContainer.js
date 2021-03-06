import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const NumberContainer = ({ selectedNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{selectedNumber}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.secondary,
    fontSize: 22,
  },
});
