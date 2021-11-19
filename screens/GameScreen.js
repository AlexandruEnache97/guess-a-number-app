import React, { useState, useRef, useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import colors from "../constants/colors";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

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

const GameScreen = ({ userChoice, gameOverHandler }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      gameOverHandler(rounds);
    }
  }, [currentGuess, userChoice, gameOverHandler]);

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
    setRounds((currRounds) => currRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <TitleText>Oppenent's Guess</TitleText>
      <NumberContainer selectedNumber={currentGuess} />
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "LOWER")}>
          LOWER
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "GREATER")}>
          GREATER
        </MainButton>
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
    width: 400,
    maxWidth: "90%",
  },
});

export default GameScreen;
