import React, { useState, useRef } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    if (
      (currentGuess < userChoice && direction === "LOWER") ||
      (currentGuess > userChoice && direction === "GREATER")
    ) {
      Alert.alert("Wrong guess", "Don't lie. We know that you know!", [
        { title: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "LOWER") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Text>Oppenent's Guess</Text>
      <NumberContainer selectedNumber={currentGuess} />
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          color={colors.secondary}
          onPress={nextGuessHandler.bind(this, "LOWER")}
        />
        <Button
          title="GREATER"
          color={colors.primary}
          onPress={nextGuessHandler.bind(this, "GREATER")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
