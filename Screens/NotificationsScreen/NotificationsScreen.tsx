import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../../Components/Screen/Screen";

const NotificationsScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>NotificationsScreen</Text>
      </View>
    </Screen>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
