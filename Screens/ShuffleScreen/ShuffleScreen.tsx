import React, { FC } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Screen from "../../Components/Screen/Screen";
import { Props } from "./ShuffleScreenType";
import Header from "../../Components/Header/Header";
import ArtistsProfileSlider from "../../Components/ArtistsProfileSlider/ArtistsProfileSlider";
import FeaturedDJSSlider from "../../Components/FeaturedDJSSlider/FeaturedDJSSlider";
import DJList from "../../Components/DJList/DJList";
import colors from "../../config/colors";

const ShuffleScreen: FC<Props> = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Header />
        <View style={{ height: "90%", width: "100%" }}>
          <ScrollView
            style={styles.scrollViewStyle}
            contentContainerStyle={styles.contenetentContainerStyle}
            showsVerticalScrollIndicator={false}
          >
            <ArtistsProfileSlider />
            <FeaturedDJSSlider />
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitleTextStyle}>ALL DJS</Text>
              <View style={styles.searchAndFilterContainer}>
                <TouchableOpacity>
                  <ImageBackground
                    source={require("../../assets/blackTex.jpg")}
                    imageStyle={styles.bacgroundImageStyle}
                    resizeMode="cover"
                    style={[
                      styles.iconContainer,
                      {
                        marginRight: 10,
                      },
                    ]}
                  >
                    <Image
                      source={require("../../assets/search.png")}
                      style={styles.iconStyle}
                    />
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity>
                  <ImageBackground
                    source={require("../../assets/blackTex.jpg")}
                    imageStyle={styles.bacgroundImageStyle}
                    resizeMode="cover"
                    style={styles.iconContainer}
                  >
                    <Image
                      source={require("../../assets/filter.png")}
                      style={styles.iconStyle}
                    />
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
            <DJList />
          </ScrollView>
        </View>
      </View>
    </Screen>
  );
};

export default ShuffleScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  scrollViewStyle: { width: "100%" },
  contenetentContainerStyle: {
    width: "100%",
  },
  subTitleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  subTitleTextStyle: { color: colors.white, fontWeight: "700", fontSize: 24 },
  searchAndFilterContainer: { flexDirection: "row" },
  bacgroundImageStyle: { borderRadius: 50 },
  iconContainer: {
    backgroundColor: colors.black,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
});
