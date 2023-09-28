import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import StripedBackgroundDecal from '../components/StripedBackgroundDecal';

const ProfileApprovedScreen = ({navigation}) => {

    return (
        <View className='w-full h-full flex-1'>
            <StripedBackgroundDecal bgStyle='justify-center space-y-4'>
                <Text className='text-white font-bold text-center uppercase text-2xl'>YOU'RE IN!</Text>
                <Text className='text-white text-lg text-center leading-none'>Hey {"User's-name"}. Welcome to the Platinum Fuse community! Your support and loyalty enables us keep our community exclusive. </Text>

                <View className='space-y-4 pt-10'>
                    <Button
                        navigation={navigation} 
                        navigateTo={'Subscription'}
                        text={'Join Platinum Fuse'}
                        buttonStyle='bg-primary'
                        textStyle='text-black font-semibold text-lg'
                    />

                    <View className='flex-row items-center justify-center my-4'>
                        <View className='flex-grow border-t border-white'></View>
                    </View>

                    <Button
                        navigation={navigation} 
                        navigateTo={'Referral'}
                        text={'Endorse a friend to join'}
                        buttonStyle='border border-white'
                        textStyle='text-white font-semibold text-lg'
                    />
                </View>

            </StripedBackgroundDecal>
        </View>
    );

}

export default ProfileApprovedScreen;
