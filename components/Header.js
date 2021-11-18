import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: colors.textSecondary,
    fontSize: 20,
  },
});

export default Header;
