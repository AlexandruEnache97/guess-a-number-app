import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const newGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const startGameHandler = (insertedNumber) => {
    setUserNumber(insertedNumber);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a number game" />
      {userNumber && guessRounds <= 0 ? (
        <GameScreen userChoice={userNumber} gameOverHandler={gameOverHandler} />
      ) : guessRounds > 0 ? (
        <GameOverScreen
          guessRounds={guessRounds}
          userNumber={userNumber}
          newGameHandler={newGameHandler}
        />
      ) : (
        <StartGameScreen startGameHandler={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
