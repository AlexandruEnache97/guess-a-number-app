import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (insertedNumber) => {
    setUserNumber(insertedNumber);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a number game" />
      {userNumber ? (
        <GameScreen userChoice={userNumber} />
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
