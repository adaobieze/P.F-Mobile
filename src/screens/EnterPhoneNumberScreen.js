import React, { useState, useRef } from 'react';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import PhoneNumberInput from 'react-native-phone-number-input';
import { submitPhoneNumber } from '../api';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import StripedBackgroundDecal from '../components/StripedBackgroundDecal';

const EnterPhoneNumberScreen = ({ navigation })  => {
  // console.log(navigation); 
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = useRef(null);

  // const handlePhoneChange = (number, data) => {
  //   setValue(number);
  //   if (data) {
  //     setFormattedValue(data.number);
  //   }
  // }
  const handlePhoneChange = (number) => {
    setValue(number);
    setFormattedValue(number);
  }

  const validatePhoneNumber = () => {
    const isValid = phoneInput.current?.isValidNumber(value);

    if (isValid) {
      setErrorMessage("");
      
      // Please uncomment the following line once backend server is set up
      // submitPhoneNumber(formattedValue);

      // Navigate to next screen
      navigation.navigate('OTP', { phoneNumber: formattedValue });
    } else {
      setErrorMessage("Please, enter a valid phone number");
    }
  }

  

  return (
    <View className='h-full w-full bg-black'>
      <StripedBackgroundDecal> 
      <BackButton navigation={navigation} style={{marginTop:20}} />
        <View className='h-3/5 justify-center pt-4'>
          <Text className='text-white font-semibold text-4x08168114402l mb-8'>
            Enter Phone Number
          </Text>
          <View className='w-full'>
            <PhoneNumberInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode='NG'
              onChangeFormattedText={(text) => handlePhoneChange(text)}
              // onChangeFormattedText={(number, data) => handlePhoneChange(number, data)}
              containerStyle={{ backgroundColor: 'white', width:'100%'}}
              textContainerStyle={{backgroundColor: 'white', borderLeftColor:'black', borderLeftWidth:10}}
              textStyle={{ color: 'black' }}
              flagButtonStyle={{ backgroundColor: 'transparent', borderRightColor:'black', borderRightWidth:10 }}
              flagTextStyle={{ color: 'blue' }}
              codeTextStyle={{ color: 'black' }}
              withDarkTheme
              withShadow
              autoFocus
            />
          </View>
          {errorMessage.length > 0 &&
            <Text className='text-red-600 mt-2'>{errorMessage}</Text>
          }
          <Button
            navigation={navigation}
            onPress={validatePhoneNumber}
            text={'Next'}
            buttonStyle='bg-primary mt-8'
            textStyle='font-semibold text-lg text-black'
          />
      
        </View>
        
      </StripedBackgroundDecal>
    </View>
  );
};

export default EnterPhoneNumberScreen;