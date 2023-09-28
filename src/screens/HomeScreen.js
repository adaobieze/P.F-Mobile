import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import StripedBackgroundDecal from '../components/StripedBackgroundDecal';

const HomeScreen = ({navigation}) => {

  return (
    <View className='flex-1 justify-center items-center bg-black'>

      <BackButton navigation={navigation}  />
            
      <Text className='text-primary font-semibold text-lg text-center'>This is the HomeScreen</Text>

      <Button 
        navigation={navigation}
        navigateTo={'Onboarding'}
        text={'Next'}
        image={require('../../assets/images-videos/right-arrow.png')}
        buttonStyle='bg-primary'
        textStyle='text-black font-semibold text-lg'
        imgStyle='ml-3'
      />

      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;