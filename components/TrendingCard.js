import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  BackgroundImage,
} from "react-native";

import { COLORS, SIZES, FONTS, icons } from "../constants";
import { BlurView } from "@react-native-community/blur";

const RecipeCardInfo = ({ recipeItem }) => {
  if (Platform.OS === "ios") {
    return (
      <BlurView blurType="dark" style={styles.recipeCardContainer}>
        <RecipeCardDetails recipeItem={recipeItem} />
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          ...styles.recipeCardContainer,
          backgroundColor: COLORS.transparentDarkGray,
        }}
      >
        <RecipeCardDetails recipeItem={recipeItem} />
      </View>
    );
  }
};

const RecipeCardDetails = ({ recipeItem }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            width: "70%",
            ...FONTS.h3,
            fontSize: 18,
          }}
        >
          {recipeItem?.name}
        </Text>
        <Image
          style={{ width: 20, height: 20, marginRight: SIZES.base , tintColor:COLORS.darkGreen}}
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
        />
      </View>

      <Text style={{color:COLORS.white,...FONTS.body4}}>
          {recipeItem.duration} | {recipeItem.serving} Serving
      </Text>
    </View>
  );
};

const Trending = ({ containerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity
        
      style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        ...containerStyle,
        
      }}
      onPress={onPress}
    >
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={{ width: 250, height: 350, borderRadius: SIZES.radius }}
      />

      <View
        style={{
          position: "absolute",
          top: 20,
          left: 15,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.transparentGray,
        }}
      >
        <Text style={{ color: "white", ...FONTS.h4 }}>
          {recipeItem.category}
        </Text>
      </View>

      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};

export default Trending;

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
});
