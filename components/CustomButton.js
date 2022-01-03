import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { FONTS , COLORS} from '../constants'

const Button = ({buttonText,buttonContainerStyle, colors, onPress}) => {
        
        // return (
        //     <TouchableOpacity >
        //             <Text style={{backgroundColor:'red'}}>sss</Text>
        //     </TouchableOpacity>
        // )
   
        if(colors?.length > 0) {
            return (
                <TouchableOpacity onPress={onPress}>
                    
                    <LinearGradient style={{...buttonContainerStyle }}  start={{x:0,y:0}} end={{x:1,y:0}} colors={colors}>
                    <Text style={{textAlign: 'center',color:COLORS.lightGreen, ...FONTS.h3}}> 
                        {buttonText}
                    </Text>
                    </LinearGradient>
                </TouchableOpacity>
            )
        }else {
            return (
                <TouchableOpacity onPress={onPress} style={{...buttonContainerStyle}}>
                    <Text style={{textAlign: 'center',color:'white', ...FONTS.h3}}> 
                        {buttonText}
                    </Text>
                </TouchableOpacity>
            )
        }
    
}

export default Button