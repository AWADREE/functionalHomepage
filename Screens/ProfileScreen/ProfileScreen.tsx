import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../../Components/Screen/Screen";

const ProfileScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
