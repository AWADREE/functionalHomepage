import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { Props } from "./DJCardType";
import RatingAndAnth from "../RatingAndAnth/RatingAndAnth";
import colors from "../../config/colors";

const DJCard: FC<Props> = ({ dj }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={require("../../assets/tex.jpg")}
        imageStyle={{ borderRadius: 10 }}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.upperHalfCOntainer}>
          <Image source={{ uri: dj.image }} style={styles.djImageStyle} />
          <View style={styles.personalInfroContainer}>
            <Text style={styles.nameTextStyle}>{dj.name}</Text>
            <Text style={styles.ageTextStyle}>
              {dj.age} yo.,{dj.place}
            </Text>
            <View style={styles.ratingAndAnthContainer}>
              <View style={styles.ratingContaniner}>
                <RatingAndAnth text={`${dj.rating}`} />
              </View>
              <View style={styles.anthContaniner}>
                <RatingAndAnth isRating={false} text={`${dj.anth} ANTH/h`} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.categoriesContainer}>
          {dj.categories.map((cat, key) => {
            return (
              <View key={key} style={styles.categoryContainer}>
                <Text style={styles.categoryTextStyle}>{cat}</Text>
              </View>
            );
          })}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DJCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
  },
  upperHalfCOntainer: { flexDirection: "row", width: "100%" },
  djImageStyle: {
    width: "25%",
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  personalInfroContainer: {
    width: "75%",
    height: 100,
    justifyContent: "space-between",
  },
  nameTextStyle: { color: colors.white, fontSize: 18, fontWeight: "700" },
  ageTextStyle: { color: colors.lightGreyText },
  ratingAndAnthContainer: { width: "75%", flexDirection: "row" },
  ratingContaniner: { width: "35%", marginRight: 8 },
  anthContaniner: { width: "65%" },
  categoriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  categoryContainer: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.lightGreyText,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  categoryTextStyle: { color: colors.lightGreyText },
});
