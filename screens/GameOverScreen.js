import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = ({ guessRounds, userNumber, newGameHandler }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!</TitleText>
      <Image
        fadeDuration={500}
        style={styles.image}
        resizeMode="center"
        source={require("../assets/success.png")}
      />
      <BodyText style={styles.textPadding}>
        Your phone needed <Text style={styles.highlight}>{guessRounds}</Text>{" "}
        rounds to guess
      </BodyText>
      <BodyText style={styles.textPadding}>
        Number was: <Text style={styles.highlight}>{userNumber}</Text>
      </BodyText>
      <View style={styles.buttonContainer}>
        <MainButton onPress={newGameHandler}>New game</MainButton>
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
  image: {
    width: "80%",
    height: 300,
    borderRadius: 40,
  },
  textPadding: {
    paddingBottom: 5,
  },
  buttonContainer: {
    marginTop: 30,
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default GameOverScreen;
