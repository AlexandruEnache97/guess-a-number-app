import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

const GameOverScreen = ({ guessRounds, userNumber, newGameHandler }) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Text>Number of rounds: {guessRounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <View>
        <Button title="New game" onPress={newGameHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
