import React from 'react';
import { ImageBackground, View } from 'react-native';

const StripedBackgroundDecal = ({children, bgStyle, style, image}) => {
  return (
    <View className='h-full w-full bg-black'>
        <ImageBackground 
          source={image ? image : require('../../assets/images-videos/background-decal.png')}
          // className='flex-1 p-7'
          className={`flex-1 ${bgStyle}`}
          style={[{padding: 20}, style]}
          resizeMode="cover">
          {children}
        </ImageBackground>
    </View>
  );
}

export default StripedBackgroundDecal;
