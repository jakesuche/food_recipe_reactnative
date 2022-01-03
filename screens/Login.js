import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { images, FONTS, COLORS, SIZES } from "../constants";
import Details from "../components/details";


const Login = ({ navigation }) => {
  function rendHeader() {
    return (
      <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
        <ImageBackground
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center" }}
          source={images.loginBackground}
        >
          <LinearGradient
            style={{
              height: 590,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
          >
            <Text
              style={{
                color: COLORS.white,
                lineHeight: 45,
                width: "90%",
                ...FONTS.largeTitle,
              }}
            >
              Flaming Allure... Good Vibes And Sizzling Bites
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: COLORS.black, flex: 1 }}>
      <StatusBar barStyle="light-content" />
      {/* header view */}
      {rendHeader()}

      <Details navigation={navigation} images={images} FONTS={FONTS} COLORS={COLORS} SIZES={SIZES} />
    </View>
  );
};

export default Login;
