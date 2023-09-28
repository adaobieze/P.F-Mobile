import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, FlatList, useWindowDimensions } from 'react-native';
import OnBoardingImages from '../components/OnBoardingImages';
import Button from '../components/Button';
import { handleLinkedInSignIn } from '../api';
import Paginator from '../components/Paginator';
import StripedBackgroundDecal from '../components/StripedBackgroundDecal';

const OnBoardingScreen1 = ({ navigation }) => {

    const slides = [
        {text:"Welcome to the premium dating app created exclusively for you.", image:require("../../assets/images-videos/onboard1.png")},
        {text:"Meet new people, find new relationships, chat with relationship coaches, attend exclusive events, be in control.", image:require("../../assets/images-videos/onboard2.png")},
    ]
const {width} = useWindowDimensions();
const [currentIndex, setCurrentIndex] = useState(0)
const slidesRef = useRef(null);
const scrollx = useRef(new Animated.Value(0)).current;
const viewableItemsChanged = useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index);
}).current;
const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

  return (
    <View className='w-full h-full flex-1'>
        <StripedBackgroundDecal style={{padding:0, paddingTop:20,justifyContent:"space-between"}}>
          <View/>
          <View>
              <FlatList 
          onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollx}}}], {
            useNativeDriver:false
          })}
          data = {slides}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
          horizontal
          showsHorizontalScrollIndicator ={false}
          pagingEnabled

          renderItem={({item})=>{
            return(
                <View style={{  width:width,}}>
                  <View style ={{ padding:5}}>
                    <Image source={item.image} style={{width:"100%", height:235}} resizeMode='center'/>
                  </View>
                  <View style={{alignItems:"center", marginVertical:30}}>
                    <Text style={styles.text}>{item.text}</Text>
                  </View>
                </View>
            )
          }}
          />
          <View style = {{alignItems:"center", justifyContent:"center",}}>
            <Paginator data = {slides} scrollx = {scrollx}/>
          </View>
          </View>
      <View style={{marginHorizontal:30}}>
           <Button 
              navigation={navigation} 
              text={'Next'} 
              image = {require("../../assets/images-videos/arrowRight.png")}
              imgStyle2={{width:24, height:15, marginLeft:8}}
              navigateTo={'Onboarding'} 
              buttonStyle='bg-primary mb-4' 
              textStyle='font-semibold text-lg text-black'
            />
      </View>
      
      </StripedBackgroundDecal>
    </View>
  );
}
const styles = StyleSheet.create({
  text:{
    width: "90%",
    color: "#FEFEFE",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "400",
  }
})

export default OnBoardingScreen1;
