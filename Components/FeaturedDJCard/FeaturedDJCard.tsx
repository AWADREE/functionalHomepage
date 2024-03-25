import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  View,
  Animated,
} from "react-native";
import React, { FC } from "react";
import { Props } from "./FeaturedDJCardType";
import RatingAndAnth from "../RatingAndAnth/RatingAndAnth";
import colors from "../../config/colors";

const FeaturedDJCard: FC<Props> = ({
  featuredDJ,
  translateY,
  scale,
  myIndex,
  setIndex,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Animated.View
        style={[
          {
            transform: [
              // { translateY },
              { scale },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={() => setIndex(myIndex)}>
          <ImageBackground
            source={require("../../assets/tex.jpg")}
            imageStyle={styles.imageBackStyle}
            resizeMode="cover"
            style={styles.imageBackcontainer}
          >
            <Image
              source={{ uri: featuredDJ.image }}
              style={styles.djProfileImageStyle}
            />
            <Text style={styles.nameTextStyle}>{featuredDJ.name}</Text>
            <RatingAndAnth text={`${featuredDJ.rating}`} />
          </ImageBackground>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default FeaturedDJCard;

const styles = StyleSheet.create({
  imageBackStyle: { borderRadius: 20 },

  cardContainer: {
    width: 200,
    marginHorizontal: 7,
    borderRadius: 20,
  },

  imageBackcontainer: {
    height: 220,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  djProfileImageStyle: {
    width: 200,
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nameTextStyle: { color: colors.white, fontWeight: "700", fontSize: 16 },
});
