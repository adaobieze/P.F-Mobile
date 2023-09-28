import React, { useEffect, useState }  from 'react';
import { View, Text, Image, ScrollView, Pressable, Alert } from 'react-native';
import { getSubscriptionPrices, mockPurchase, validateReceipt } from '../api';  
import StripedBackgroundDecal from '../components/StripedBackgroundDecal';
import BackButton from '../components/BackButton';
import ModalComponent from '../components/Modal';

const SubscriptionScreen = ({navigation}) => {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        getSubscriptionPrices().then(data => {
            setSubscriptions(data);
        });
    }, []);

    // const handleSubscriptionSelection = (subscription) => {
    //     navigation.navigate('Payment', { subscription });
    // }

    const handleSubscriptionSelection = async (subscription) => {
        try {
            // Use mockPurchase for now, replace with real purchase logic later
            const purchaseResponse = await mockPurchase(subscription.productId);

            if (purchaseResponse.success) {
                const validationResponse = await validateReceipt(purchaseResponse.receipt);
                if (validationResponse.success) {
                    Alert.alert('Success', 'Purchase was successful!', [{ text: 'OK' }]);
                    // Navigate user to the content they've unlocked or update their account status
                    navigation.navigate('BioScreen', { subscription });
                } else {
                    throw new Error('Receipt validation failed');
                }
            } else {
                throw new Error('Purchase failed');
            }
        } catch (err) {
            Alert.alert('Error', err.message, [{ text: 'OK' }]);
        }
    }

    return (
        <View className='w-full h-full flex-1'>
            <StripedBackgroundDecal bgStyle='justify-center space-y-4 pt-[10%]'>
                <ScrollView className='flex flex-1 h-full space-y-4 pt-[40%]'>
                    <Text className='text-primary font-bold text-center uppercase text-2xl'>UPGRADE YOUR DATING LIFE</Text>
                    <Text className='text-white text-lg text-center leading-none'>A paid membership doubles your matches and gives you access to exclusive events and features.</Text>

                    <View className='flex-row items-center justify-center my-4'>
                        <View className='flex-grow border-t border-primary'></View>
                        <View className='rounded-full p-5'>
                            <Image className='w-10 h-10' source={require('../../assets/images-videos/Platinum-Fuse-Logo-Gold.png') }/>
                        </View>
                        <View className='flex-grow border-t border-primary'></View>
                    </View>

                    <Text className='text-primary text-center text-lg font-semibold'>More prospects daily </Text>
                    <Text className='text-primary text-center text-lg font-semibold'>Access to exclusive events</Text>
                    <Text className='text-primary text-center text-lg font-semibold'>We need to add more features here.</Text>
                </ScrollView>

                <View className='absolute bottom-0 left-0 right-0 p-5 bg-primary/50 h-1/4 rounded-t-2xl space-y-8'>
                    <View className='w-full flex flex-row justify-between'>
                        {subscriptions.map((subscription, index) => (
                            <Pressable
                                key={index}
                                onPress={() => handleSubscriptionSelection(subscription)} 
                                className='w-[33%] h-full bg-white/90 rounded-lg space-y-4 items-center justify-center'
                            >
                                {subscription.discount && (
                                    <View className='absolute -top-8 h-10 bg-primary rounded-t-lg p-1 w-full'>
                                        <Text className='text-black text-center leading-none font-semibold'>
                                            {`Save ${subscription.discount}%`}
                                        </Text>
                                    </View>
                                )}
                                <Text className='text-black text-center leading-none uppercase font-semibold text-sm'>
                                    {subscription.name}
                                </Text>
                                <Text className='text-black text-center leading-none uppercase font-medium text-sm'>
                                    {`₦ ${subscription.price}`}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>

                <BackButton navigation={navigation} style={{}}/>
            </StripedBackgroundDecal>
        </View>
    );
}

export default SubscriptionScreen;
