import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { CustomButton } from '../components'


const Details = ({images, FONTS, COLORS, SIZES, navigation }) => {
    
   
    
    return (
        <View style={{flex:1, paddingHorizontal:SIZES.padding}}> 
            <Text  style={{marginTop:SIZES.radius + 12, width:'70%', color:COLORS.gray, ...FONTS.body3}}>
                Discover more than 1200 food recipes in your hands and cooking it
            </Text>

            <View  style={{flex:1, justifyContent: 'center', }}>
                <CustomButton onPress={()=>navigation.replace('Home')}  buttonContainerStyle={{
                     paddingVertical:18,
                     borderRadius:20
                }} buttonText="Login" colors={[COLORS.darkGreen, COLORS.lime]} />
                <CustomButton buttonContainerStyle={{
                    marginTop:SIZES.radius,
                    borderWidth:1, 
                    paddingVertical:18,borderRadius:20 ,borderColor:COLORS.darkGreen
                }}  buttonText="Sign up"  />
            </View>
        </View>
    )
}


export default Details;