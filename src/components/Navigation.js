import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import WaitlistScreen from '../screens/WaitlistScreen';
import EnterPhoneNumberScreen from '../screens/EnterPhoneNumberScreen';
import OTPScreen from '../screens/OTPScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileApprovedScreen from '../screens/ProfileApprovedScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import BioScreen from '../screens/BioScreen';
import OnBoardingScreen1 from '../screens/Onboarding';
import LocationScreen from '../screens/Location';
import NotificationScreen from '../screens/Notification';
import ApprovedScreen from '../screens/Approved';
import PaymentApprovedScreen from '../screens/PaymentApproved';
import CardDetailScreen from '../screens/CardDetail';
import ProfileDeniedScreen from '../screens/ProfileDenied';
import ReferralScreen from '../screens/Referral';
import FilterScreen from '../screens/Filter';
import EditInterestsScreen from '../screens/EditInterests';
import PrivacyScreen from '../screens/PrivacyScreen';
import DeactivationSuccessfulScreen from '../screens/DeactivationSuccessful';
import DeactivateAccountScreen from '../screens/DeactivateAccount';
import UnsubscribeAccountScreen from '../screens/UnsubscribeAccount';
import UnsubscribeSuccessfulScreen from '../screens/UnsubscribeSucessful';

const Navigation = () => {

const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Onboard" component={OnBoardingScreen1} />
                <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
                <Stack.Screen name="EnterPhoneNumber" component={EnterPhoneNumberScreen} />
                <Stack.Screen name="OTP" component={OTPScreen} />
                <Stack.Screen name="Signup" component={SignUpScreen} />
                <Stack.Screen name="Waitlisted" component={WaitlistScreen} />
                <Stack.Screen name="ProfileApproved" component={ProfileApprovedScreen} />
                <Stack.Screen name="Subscription" component={SubscriptionScreen} />
                <Stack.Screen name="BioScreen" component={BioScreen} />
                <Stack.Screen name="Location" component={LocationScreen} />
                <Stack.Screen name="Notification" component={NotificationScreen} />
                <Stack.Screen name="Approved" component={ApprovedScreen} />
                <Stack.Screen name="PaymentApproved" component={PaymentApprovedScreen} />
                <Stack.Screen name="CardDetail" component={CardDetailScreen} />
                <Stack.Screen name="ProfileDenied" component={ProfileDeniedScreen} />
                <Stack.Screen name="Referral" component={ReferralScreen} />
                <Stack.Screen name="Filter" component={FilterScreen} />
                <Stack.Screen name="EditInterests" component={EditInterestsScreen} />
                <Stack.Screen name="Privacy" component={PrivacyScreen} />
                <Stack.Screen name="DeactivationSuccessful" component={DeactivationSuccessfulScreen} />
                <Stack.Screen name="DeactivateAccount" component={DeactivateAccountScreen} />
                <Stack.Screen name="UnsubscribeSuccessful" component={UnsubscribeSuccessfulScreen} />
                <Stack.Screen name="UnsubscribeAccount" component={UnsubscribeAccountScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;