// Button.js
import React from "react";
import { Pressable, Text, View, Image } from 'react-native';

export default function Button({ navigation, onPress, text, image, navigateTo, bStyle, tStyle, buttonStyle, textStyle, imgStyle, imgStyle2, imageOnLeft = false }) {
    
    const handlePress = () => {
        if (onPress) {
          onPress();
        }
        if (navigation && navigateTo) {
          navigation.navigate(navigateTo);
        }
    };
    
    return (
        <Pressable
            onPress={handlePress}
            style = {bStyle}
            className={`rounded-md h-12 flex flex-row items-center justify-center ${buttonStyle}`}
        >
            {image && imageOnLeft && <Image className={`${imgStyle}`} source={image} style ={imgStyle2} resizeMode="center"/>}
            <Text className={`${textStyle}`} style = {tStyle}>{text}</Text>
            {image && !imageOnLeft && <Image className={`${imgStyle}`} source={image} style ={imgStyle2} resizeMode="center"/>}
        </Pressable>
    );
}
