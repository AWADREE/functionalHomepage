import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useRef, useState, useEffect } from "react";
import { FeaturedDJS, Props, ViewableItemsType } from "./FeaturedDJSSliderType";
import FeaturedDJCard from "../FeaturedDJCard/FeaturedDJCard";
import colors from "../../config/colors";

const FEATUREDDJS: FeaturedDJS = [
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ guy",
    rating: 4.9,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ Dude",
    rating: 4.5,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ man",
    rating: 2.6,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ bro",
    rating: 4.8,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ right",
    rating: 3.9,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ now",
    rating: 4.7,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ k4",
    rating: 4.2,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/200",
    name: "DJ march",
    rating: 4.0,
  },
];

const FeaturedDJSSlider: FC<Props> = ({}) => {
  //----------------Animation Refs------------------------
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  //------------------------------------------------------

  //----------------Scrolling Buttons logic-----------------------
  const [initialIndex, setInitialIndex] = useState<number>(0);
  const itemIndexInViewPort = useRef<number>(0);

  const goToPrevIndex = () => {
    if (itemIndexInViewPort.current === 0) {
      return;
    }
    if (initialIndex === itemIndexInViewPort.current - 1) {
      //updating index to be the current viable index
      setInitialIndex(itemIndexInViewPort.current);
      //then setting it to prev index
      setTimeout(() => {
        setInitialIndex(itemIndexInViewPort.current - 1);
      }, 100);
    } else {
      setInitialIndex(itemIndexInViewPort.current - 1);
    }
  };

  const goToNextIndex = () => {
    if (itemIndexInViewPort.current === FEATUREDDJS.length - 1) {
      return;
    }
    if (initialIndex === itemIndexInViewPort.current + 1) {
      //updating index to be the current viable index
      setInitialIndex(itemIndexInViewPort.current);
      //then setting it to next index
      setTimeout(() => {
        setInitialIndex(itemIndexInViewPort.current + 1);
      }, 100);
    } else {
      setInitialIndex(itemIndexInViewPort.current + 1);
    }
  };

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: initialIndex,
      animated: true,
      viewPosition: 0.5,
    });
  }, [initialIndex]);
  //------------------------------------------------------

  //--------------Dectect item on screen index------------
  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 40,
    waitForInteraction: true,
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewableItemsType | any;
  }) => {
    itemIndexInViewPort.current = viewableItems[viewableItems.length - 1].index;
  };
  //------------------------------------------------------
  return (
    <View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitleTextStyle}>FEATURED DJS</Text>
      </View>
      <View style={styles.flatlistContainer}>
        <Animated.FlatList
          ref={flatListRef}
          initialScrollIndex={initialIndex}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            {
              paddingHorizontal: Dimensions.get("screen").width / 2 - 107,
            },
            styles.flatlistContentContainerStyle,
          ]}
          data={FEATUREDDJS}
          horizontal
          keyExtractor={(item) => `${item.name + item.image}`}
          renderItem={({ item, index }) => {
            //--------------Animation logic------------
            const inputRange = [
              (index - 1) * 214, //prev item
              index * 214, //current item
              (index + 1) * 214, //next item
            ];

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -50, 0],
            });

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.7, 1, 0.7],
            });
            //------------------------------------------------------
            return (
              <FeaturedDJCard
                myIndex={index}
                setIndex={setInitialIndex}
                scale={scale}
                featuredDJ={item}
                translateY={translateY}
              />
            );
          }}
          snapToInterval={214}
          decelerationRate={0}
          bounces={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: scrollX } },
              },
            ],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
      <View style={styles.arrowsContainer}>
        <TouchableOpacity
          style={styles.arrowButtonContainer}
          onPress={() => goToPrevIndex()}
        >
          <Image
            source={require("../../assets/playBack.png")}
            style={styles.arrowIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.arrowButtonContainer}
          onPress={() => goToNextIndex()}
        >
          <Image
            source={require("../../assets/fastForward.png")}
            style={styles.arrowIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeaturedDJSSlider;

const styles = StyleSheet.create({
  flatlistContainer: {
    width: "100%",
    //  height: 300,
    height: 220,
  },
  flatlistContentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    // alignItems: "flex-end",
  },
  subTitleContainer: { width: "100%", marginLeft: 20, marginBottom: 20 },
  subTitleTextStyle: { fontWeight: "700", fontSize: 24, color: colors.white },
  arrowsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  arrowButtonContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowIconStyle: {
    width: 30,
    height: 30,
  },
});
