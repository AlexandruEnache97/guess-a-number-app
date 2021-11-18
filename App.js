import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [loading, setLoading] = useState(false);

  if (!loading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoading(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

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
