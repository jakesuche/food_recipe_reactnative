import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  Platform,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { BlurView } from "@react-native-community/blur";

import { COLORS, SIZES, FONTS, icons } from "../constants";
const HEADER_HEIGHT = 350;

const RecipeCreatorCardDetails = ({ selected }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      {/* profile phote */}
      <View style={{ width: 40, height: 40, marginLeft: 20 }}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={selected?.author?.profilePic}
        />
      </View>

      {/* label */}
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
          Recipe by:
        </Text>
        <Text style={{ color: COLORS.white2, ...FONTS.h3 }}>
          {selected?.author?.name}
        </Text>
      </View>

      {/* button */}
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: COLORS.lightGreen,
        }}
      >
        <Image
          source={icons.rightArrow}
          style={{ height: 15, width: 15, tintColor: COLORS.lightGreen1 }}
        />
      </TouchableOpacity>
    </View>
  );
};
const RecipeCreatorCardInfo = ({ selected }) => {
  if (Platform.OS === "ios") {
    return (
      <BlurView blurType="dark" style={{ flex: 1, borderRadius: SIZES.radius }}>
        <RecipeCreatorCardDetails selected={selected} />
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          backgroundColor: COLORS.transparentBlack9,
          flex: 1,
          borderRadius: SIZES.radius,
        }}
      >
        <RecipeCreatorCardDetails selected={selected} />
      </View>
    );
  }
};
const Recipe = ({ navigation, route }) => {
  const [selected, setSelected] = React.useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  console.log(scrollY);

  React.useEffect(() => {
    setSelected(route.params.recipe);
  }, []);

  function renderHeaderBar() {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
        }}
      >
        {/* screen overlay */}
        <Animated.View
          style={{
            backgroundColor: COLORS.black,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 120, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        ></Animated.View>

        {/* header bar title */}
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom:10,
            opacity:scrollY.interpolate({
                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT -50],
                outputRange: [0, 1]
            }),
            transform:[
                {
                    translateY: scrollY.interpolate({
                        inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                        outputRange:[0,0],
                        extrapolate:'clamp'
                    })
                }
            ]
          }}
        >
            <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
          Recipe by:
        </Text>
        <Text style={{ color: COLORS.white2, ...FONTS.h3 }}>
          {selected?.author?.name}
        </Text>
        </Animated.View>

        {/* backbutton */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            backgroundColor: COLORS.transparentBlack5,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            style={{ width: 15, height: 15, tintColor: COLORS.lightGray }}
          />
        </TouchableOpacity>
        {/* bookmark button */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={
              selected?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
            style={{ width: 30, height: 30, tintColor: COLORS.darkGreen }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderRecipeCardHeader() {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* bGimage */}
        <Animated.Image
          resizeMode="contain"
          style={{
            width: "200%",
            height: HEADER_HEIGHT,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
          source={selected?.image}
        ></Animated.Image>
        {/* recipe creator card */}

        <Animated.View
          style={{
            position: "absolute",
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        >
          <RecipeCreatorCardInfo selected={selected} />
        </Animated.View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar barStyle="light-content" />
      <Animated.FlatList
        data={selected?.ingredients}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* header */}
            {renderRecipeCardHeader()}
            {/* info */}

            {/* ingredient */}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 30,
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  width: 50,
                  borderRadius: 5,
                  backgroundColor: COLORS.lightGray,
                }}
              >
                <Image source={item.icon} style={{ height: 40, width: 40 }} />
              </View>
              {/* description */}
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                }}
              >
                <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
              </View>
              {/* Quantity */}
              <View
                style={{ alignItems: "flex-end", justifyContent: "center" }}
              >
                <Text style={{ ...FONTS.body3 }}>{item.quantity}</Text>
              </View>
            </View>
          );
        }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />

      {/* Headerbar */}

      {renderHeaderBar()}
    </View>
  );
};

export default Recipe;
