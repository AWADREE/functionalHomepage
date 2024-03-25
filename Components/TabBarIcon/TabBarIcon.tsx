import React, { FC } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Props } from "./TabBarIconType";
import colors from "../../config/colors";

const deviceWitdh = Dimensions.get("window").width;

const TabBarIcon: FC<Props> = ({ icon, activeIcon, name, focused }) => {
  return (
    <View style={styles.genericTabContainer}>
      <Image
        source={
          !focused
            ? require("../../assets/BottomTabsIcons/Dot.png")
            : require("../../assets/BottomTabsIcons/DotActive.png")
        }
        resizeMode="contain"
        style={styles.generickDotStyle}
      />
      <Image
        source={!focused ? icon : activeIcon}
        resizeMode="contain"
        style={styles.genericTabIconStyle}
      />
      <Text
        style={[
          styles.genericTabTextStyle,
          { color: focused ? colors.tabActiveText : colors.tabText },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabBarIcon;
const styles = StyleSheet.create({
  generickDotStyle: {
    width: deviceWitdh * 0.05,
    height: deviceWitdh * 0.05,
    marginBottom: -5,
  },
  genericTabContainer: {
    alignItems: "center",
    justifyContent: "center",
    // top: Platform.OS === "ios" ? 10 : 5,
  },
  genericTabIconStyle: {
    width: deviceWitdh * 0.15,
    height: deviceWitdh * 0.15,
  },
  genericTabTextStyle: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: "500",
  },
});
