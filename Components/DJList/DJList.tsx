import { FlatList, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { DJS, Props } from "./DJListType";
import DJCard from "../DJCard/DJCard";

const ALLDJS: DJS = [
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ guy",
    age: 24,
    place: "London",
    rating: 4.9,
    anth: "10000",
    categories: [
      "Deep House",
      "House",
      "D&B",
      "D&B",
      "D&B",
      "D&B",
      "D&B",
      "D&B",
      "D&B",
    ],
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ Dude",
    age: 27,
    place: "London",
    rating: 4.5,
    anth: "10000",
    categories: ["Deep House", "House", "D&B", "D&B"],
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ man",
    age: 20,
    place: "London",
    rating: 2.6,
    anth: "10000",
    categories: ["Deep House", "House", "D&B", "D&B"],
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ bro",
    age: 16,
    place: "London",
    rating: 4.8,
    anth: "10000",
    categories: ["Deep House", "House", "D&B", "D&B"],
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ right",
    age: 19,
    place: "London",
    rating: 3.9,
    anth: "10000",
    categories: ["Deep House", "House", "D&B", "D&B"],
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ now",
    age: 23,
    place: "London",
    rating: 4.7,
    anth: "10000",
    categories: ["Deep House", "House", "D&B", "D&B"],
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ k4",
    age: 24,
    place: "London",
    rating: 4.2,
    anth: "10000",
    categories: ["Deep House", "House", "D&B", "D&B"],
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ march",
    age: 22,
    place: "London",
    rating: 4.0,
    anth: "10000",
    categories: ["Deep House", "House", "D&B", "D&B"],
  },
];

const DJList: FC<Props> = ({}) => {
  return (
    <View style={styles.flatlistContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ALLDJS}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => `${item.name + item.image}`}
        renderItem={({ item }) => {
          return <DJCard dj={item} />;
        }}
      />
    </View>
  );
};

export default DJList;

const styles = StyleSheet.create({
  flatlistContainer: { width: "100%" },
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
