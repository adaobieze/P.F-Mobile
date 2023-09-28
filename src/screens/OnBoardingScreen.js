import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import OnBoardingImages from '../components/OnBoardingImages';
import Button from '../components/Button';
import { handleLinkedInSignIn } from '../api';

const OnBoardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logo = require('../../assets/images-videos/Logo.png'); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === OnBoardingImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change images every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <View className='flex-1'>
      <ImageBackground source={OnBoardingImages[currentIndex]} className='w-full h-full flex justify-between'>
        <View className='flex flex-col justify-between items-center h-full bg-black/60'>
          <View className="flex-1" />
          <View className='flex-1'>
            <Image source={logo} className='h-[100px]' resizeMode='contain' />
          </View>
          <View className="flex-1 space-y-4">
            <Button 
              navigation={navigation} 
              text={'Sign up with phone number'} 
              navigateTo={'EnterPhoneNumber'} 
              buttonStyle='bg-primary mb-4' 
              textStyle='font-semibold text-lg text-black'
            />
            <Button 
              onPress={handleLinkedInSignIn} 
              text={'Sign up with LinkedIn'} 
              image={require('../../assets/images-videos/linkedin-logo.png')}
              buttonStyle='bg-[#0072b1]' 
              textStyle='font-semibold text-lg text-white'
              imgStyle={'h-7 w-7 mr-3'}
              imageOnLeft={true}
            />
            <Pressable onPress={() => navigation.navigate('EnterPhoneNumber')}>
              <Text className='text-primary text-center text-lg font-semibold'>
                Already have an account?
              </Text>
            </Pressable>
            <View>
              <Text className='text-white text-center text-sm font-semibold'>
                We don't post anything to your LinkedIn
              </Text>
              <Pressable onPress={() => navigation.navigate('TermsOfService')}>
                <Text className='text-white text-center text-sm font-semibold'>
                  By continuing, you agree to our{' '}
                  <Text className='font-bold'>Terms of Service</Text>
                </Text>
              </Pressable>
            </View>
            
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default OnBoardingScreen;
