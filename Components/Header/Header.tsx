import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import React, { FC } from "react";
import { Props } from "./HeaderType";
import colors from "../../config/colors";

const Header: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoTextStyle}>AWADREE</Text>
      <TouchableOpacity style={styles.profileImageContainer}>
        <Image
          source={{ uri: "https://picsum.photos/seed/picsum/50/50" }}
          style={styles.profileImageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: Platform.OS === "android" ? StatusBar?.currentHeight / 2 : 0,
  },
  logoTextStyle: { fontWeight: "900", fontSize: 24, color: colors.white },
  profileImageContainer: {
    padding: 1,
    borderRadius: 50,
    backgroundColor: colors.black,
  },
  profileImageStyle: { width: 50, height: 50, borderRadius: 50 },
});
