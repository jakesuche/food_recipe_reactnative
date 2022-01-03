import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";
import { CategoryCard, ListHeader, TrendingCard } from "../components";

const Home = ({ navigation }) => {
  function RenderSearchBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
          height: 50,
        }}
      >
        <Image
          style={{ height: 20, width: 20, tintColor: COLORS.gray }}
          source={icons.search}
        />
        <TextInput
          placeholderTextColor={COLORS.gray}
          placeholder="Search recipes"
          style={{ marginLeft: SIZES.radius, ...FONTS.body3 }}
        />
      </View>
    );
  }

  function RenderSeeRecipe() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}
      >
        <View
          style={{ width: 100, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={images.recipe} style={{ height: 80, width: 80 }} />
        </View>
        <View style={{ flex: 1, paddingVertical: SIZES.radius }}>
          <Text style={{ width: "80%", ...FONTS.body4 }}>
            You have 12 recipe, keep trying
          </Text>

          <TouchableOpacity
            style={{ paddingTop: 10 }}
            onPress={() => console.log("see recipes")}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                color: COLORS.darkGreen,
                ...FONTS.h4,
              }}
            >
              See recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const SectionComponent = () => {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ marginHorizontal: SIZES.padding, ...FONTS.h2 }}>
          Trending recipes
        </Text>

        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <TrendingCard
                onPress={() => navigation.navigate("Recipe", { recipe: item })}
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.padding : 0,
                  shadowColor: 'black',
    shadowOffset: {width: 5, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
                }}
                recipeItem={item}
              />
            );
          }}
        />
      </View>
    );
  };

  function CategoryHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}
      >
          <Text style={{flex:1, ...FONTS.h2}}></Text>
          <TouchableOpacity>
              <Text style={{color:COLORS.gray, ...FONTS.body4}}>View All</Text>
          </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => item.id}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator="false"
        ListHeaderComponent={
          <View>
            {ListHeader()}

            {RenderSearchBar()}

            {RenderSeeRecipe()}

            {SectionComponent()}
            {CategoryHeader()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
              containerStyle={{ marginHorizontal: SIZES.padding }}
              categoryItem={item}
            />
          );
        }}
        ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
      />
    </SafeAreaView>
  );
};

export default Home;
