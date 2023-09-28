// PaymentScreen.js
import React, { useEffect, useState }  from 'react';
import { Alert, View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { WebView } from 'react-native-webview';
import Input from '../components/Input';
import StripedBackgroundDecal from '../components/StripedBackgroundDecal';
import BackButton from '../components/BackButton';
import { handlePayment } from '../api'; 
import Button from '../components/Button';
import { PText } from '../components/PText';

const PaymentApprovedScreen = ({navigation}) => {
    const [Approved, setApproved] = useState(false);
    useEffect(()=>{
        setTimeout(()=>setApproved(true), 1000)
    },[])
    spinValue = new Animated.Value(0);

// First set up animation 
Animated.loop(
    Animated.timing(
      this.spinValue,
      {
       toValue: 1,
       duration: 3000,
       easing: Easing.linear,
       useNativeDriver: true
      }
    )
   ).start();

// Next, interpolate beginning and end values (in this case 0 and 1)
const spin = this.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})
    return (
        <View className='w-full h-full flex-1'>
            <StripedBackgroundDecal bgStyle='space-y-4 pt-[10%]'>
                    <View style = {{alignItems:"center", marginVertical:"30%"}}>
                     {
                        Approved ?
                        <Image source={require("../../assets/images-videos/processed.png")} style = {{width:200, height:200, marginBottom:30,}}/>
                        :
                        <Animated.Image source={require("../../assets/images-videos/processing.png")} style = {{width:200, height:200, marginBottom:30, transform: [{rotate: spin}]}}/>
                     }   
                        {
                            Approved ?
                            <PText style = {{fontSize:24, fontWeight:"600", marginTop:30}}>APPROVED</PText>
                            :
                            <PText style = {{fontSize:24, fontWeight:"600", marginTop:30}}>PROCESSING</PText>
                        }    
                    </View>
                    <View >
                    {
                        Approved ?
                        <Button 
                            onPress={()=>navigation.navigate("Filter")}
                            text={"Let's Go"} 
                            buttonStyle='bg-primary mt-10' 
                            textStyle='font-semibold text-lg'
                            bStyle={{marginBottom:20}}
                        />
                        :
                        <></>
                    }
                    </View>
               
            </StripedBackgroundDecal>
        </View>
    );
}


export default PaymentApprovedScreen;
