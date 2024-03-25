import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../../Components/Screen/Screen";

const BookingScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>BookingScreen</Text>
      </View>
    </Screen>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
