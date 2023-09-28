import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill } from 'react-native-confirmation-code-field';
import { submitOTP } from '../api';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import StripedBackgroundDecal from '../components/StripedBackgroundDecal';

const CELL_COUNT = 6;

const OTPScreen = ({ navigation, route })  => {
    const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber);
    const [otp, setOtp] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const ref = useBlurOnFulfill({otp, cellCount: CELL_COUNT});
    // const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    //     otp,
    //     setOtp,
    // });

    const validateOTP = async () => {
        // console.log(phoneNumber);
        if (otp.length !== CELL_COUNT) {
          setErrorMessage("Please, enter a valid OTP");
          return;
        }
      
        try {
        //   const response = await submitOTP(otp, phoneNumber);
        //   setErrorMessage("");
        //   const user = response.data.user;
        //   const status = response.data.status;
        //   const isNewUser = response.data.isNewUser;
          const isNewUser = true;
      
          // Save the token
          // await AsyncStorage.setItem('@storage_Key', user.token); // Uncomment when you have a token to store
      
          if (isNewUser) {
            // If new user, navigate to sign-up
            navigation.navigate('Signup', { phoneNumber: phoneNumber });
          } else {
            // If existing user, check waitlist status
            if (status === 'waitlisted') {
              navigation.navigate('Waitlisted');
            } else {
              navigation.navigate('Home');
            }
          }
        } catch (error) {
          setErrorMessage(error.message || "Invalid OTP");
        }
    };
    

    return (
        <View className='h-full w-full'>
            <StripedBackgroundDecal> 
            <BackButton navigation={navigation}  style={{marginTop:20}}/>
                <View className="h-3/5 justify-center mt-20">
                    <Text className='text-white font-semibold text-3xl mb-8'>
                        Enter Code
                    </Text>
                    <Text className='text-white font-semibold text-lg mb-8'>
                        Enter the code that was sent to {''}
                    </Text>
                    <CodeField
                        ref={ref}
                        // {...props}
                        value={otp}
                        onChangeText={setOtp}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFiledRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                // onLayout={getCellOnLayoutHandler(index)}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                    {errorMessage.length > 0 &&
                        <Text className='text-red-600 mt-2'>{errorMessage}</Text>
                    }
                    <Button
                        navigation={navigation}
                        onPress={validateOTP}
                        text={'Verify'}
                        buttonStyle='bg-primary mt-8'
                        textStyle='font-semibold text-lg text-black'
                    />
                </View>
            </StripedBackgroundDecal> 
        </View>
    );
};

const styles = {
    cell: {
        width: 50,
        height: 50,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: 'white',
        textAlign: 'center',
        backgroundColor: 'white',
        // borderRadius:10,
        padding: 5,
    },
    focusCell: {
        borderColor: '#EDAE1A',
    },
};

export default OTPScreen;
