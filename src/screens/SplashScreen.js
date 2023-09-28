import React, { useEffect } from 'react';
import { Video } from 'expo-av';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { checkUserStatus } from '../api';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Call the checkUserStatus function and handle the user status
        checkUserStatus().then(userStatus => {
            // Log the user status to the console
            console.log(userStatus);
            
            // After the video ends
            setTimeout(() => {
                // Check if the user is logged in
                if (userStatus.isLoggedIn) {
                    // User is logged in
                    if (userStatus.isOnWaitlist) {
                        // User is on waitlist
                        navigation.navigate('Waitlisted');
                    } else {
                        // User is not on waitlist
                        navigation.navigate('Home');
                    }
                } else {
                    // User is not logged in
                    navigation.navigate('Onboard');
                }
            }, 7000); // 7000 ms = 7 s
        }).catch(error => {
            // Handle error here
            console.error(error);
            // Default navigation if there's an error
            navigation.navigate('Onboarding');
        });
    }, [navigation]);

    return (
        <View 
            className='flex-1 justify-center items-center bg-black'
        >
            <Video
                source={require('../../assets/images-videos/Platinum-Fuse-Logo-Animation.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="contain"
                shouldPlay
                className='w-full h-full'
            />
        </View>
    );
};

export default SplashScreen;