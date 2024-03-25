import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Props } from "./RatingAndAnthType";
import colors from "../../config/colors";

const RatingAndAnth: FC<Props> = ({ text, isRating = true }) => {
  return (
    <View style={styles.container}>
      {isRating && (
        <Image
          source={require("../../assets/star.png")}
          style={styles.starStyle}
        />
      )}
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

export default RatingAndAnth;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "row",
  },
  starStyle: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  textStyle: { color: colors.white, fontWeight: "600" },
});
