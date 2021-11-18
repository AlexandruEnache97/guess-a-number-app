import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import colors from "../constants/colors";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const StartGameScreen = ({ startGameHandler }) => {
  const [insertedNumber, setInsertedNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const onStartGame = () => {
    startGameHandler(selectedNumber);
  };

  const onNumberChange = (inputData) => {
    setInsertedNumber(inputData.replace(/[^0-9]/g, ""));
  };

  const onNumberReset = () => {
    setInsertedNumber("");
    setConfirmed(false);
  };

  const onNumberConfirm = () => {
    if (isNaN(insertedNumber) || insertedNumber <= 0 || insertedNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        {
          text: "Ok",
          style: "destructive",
          onPress: onNumberReset,
        },
      ]);
      return;
    }

    setSelectedNumber(parseInt(insertedNumber));
    setInsertedNumber("");
    setConfirmed(true);
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirmContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer selectedNumber={selectedNumber} />
        <Button
          title="Start game"
          color={colors.secondary}
          onPress={onStartGame}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText>Start a New Game!</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>
          <Input
            value={insertedNumber}
            onChangeText={onNumberChange}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={colors.secondary}
                title="Reset"
                onPress={onNumberReset}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={colors.primary}
                title="Confirm"
                onPress={onNumberConfirm}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: 80,
  },
  confirmContainer: {
    marginTop: 40,
    alignItems: "center",
  },
});

export default StartGameScreen;
