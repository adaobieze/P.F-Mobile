import React from 'react';
import { View, StyleSheet, useWindowDimensions, Animated } from 'react-native';

const Paginator = ({data, scrollx}) => {
  const {width} = useWindowDimensions();
    return (
      <View style={styles.container}>
        {
            data.map((_,i)=>{
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width ]
                const dotColor = scrollx.interpolate({
                  inputRange,
                  outputRange: ["#FFF", "#F8B930", "#FFF"],
                  extrapolate:'clamp'
                })
                return <Animated.View style={[styles.dot, {backgroundColor:dotColor}]} key={i.toString()}/>
            })
        }
      </View>
    );
};
const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    height:20
  },
  dot:{
    height:3,
    width:48,
    marginHorizontal:10
  }
})

export default Paginator;