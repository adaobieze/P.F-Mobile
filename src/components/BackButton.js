import React from 'react';
import { Pressable, Image } from 'react-native';

const BackButton = ({ navigation, style, onPress }) => {
  const goBack = onPress ? onPress : () => navigation.goBack();
  return (
    <Pressable
      onPress={goBack}
      style={{ ...style,}}
    >
      <Image 
        source={require('../../assets/images-videos/back_arrow.png')}
        style={{ width: 24, height: 24 }}
      />
    </Pressable>
  );
};

export default BackButton;
