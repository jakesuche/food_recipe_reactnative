import { View, Text ,TouchableOpacity ,Image} from "react-native";
import React from "react";
import { COLORS, FONTS, images, SIZES } from "../constants";

export const ListHeader = () => {
  return (
    <View
      style={{
        marginHorizontal: SIZES.padding,
        flexDirection: "row",
        alignItems: "center",
        height: 80,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.h2, color: COLORS.darkGreen }}>
          Hello, Chidiebere
        </Text>
        <Text style={{ ...FONTS.body3, color: COLORS.gray , marginTop:3 }}>
          What do you want to eat today
        </Text>
      </View>
      <TouchableOpacity onPress={()=>{  
          console.log('profile picture')
           
      }}>

      <Image source={images.UserProfile11}  style={{
          width:40,
          height:40,
          borderRadius:20
      }}/>
           
      </TouchableOpacity>

    </View>
  );
};

export const ListFooter = () => {
  return <View></View>;
};
