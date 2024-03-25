import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Artists, Props } from "./ArtistsProfileSliderType";
import ArtistCardSmall from "../ArtistCardSmall/ArtistCardSmall";

const ARTISTS: Artists = [
  {
    image: "https://picsum.photos/seed/picsum/100/100",
    name: "DJ guy",
  },
  {
    image: "https://picsum.photos/seed/picsum/100/100",
    name: "DJ Dude",
  },
  {
    image: "https://picsum.photos/seed/picsum/100/100",
    name: "DJ man",
  },
  {
    image: "https://picsum.photos/seed/picsum/100/100",
    name: "DJ bro",
  },
  {
    image: "https://picsum.photos/seed/picsum/100/100",
    name: "DJ right",
  },
  {
    image: "https://picsum.photos/seed/picsum/100/100",
    name: "DJ now",
  },
  {
    image: "https://picsum.photos/seed/picsum/100/100",
    name: "DJ k4",
  },
  {
    image: "https://picsum.photos/seed/picsum/100/100",
    name: "DJ march",
  },
];

const ArtistsProfileSlider: FC<Props> = ({}) => {
  return (
    <View style={styles.flatlistContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={ARTISTS}
        horizontal
        keyExtractor={(item) => `${item.name + item.image}`}
        renderItem={({ item }) => {
          return <ArtistCardSmall artist={item} />;
        }}
      />
    </View>
  );
};

export default ArtistsProfileSlider;

const styles = StyleSheet.create({
  flatlistContainer: { width: "100%", height: 120 },
});
