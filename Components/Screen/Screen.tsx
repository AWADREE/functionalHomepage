import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import React, { FC } from "react";
import { Props } from "./ScreenType";
const Screen: FC<Props> = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/blackGreyTex.jpg")}
      resizeMode="cover"
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"} translucent={true} />
      <SafeAreaView>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? StatusBar?.currentHeight : 0,
  },
});
