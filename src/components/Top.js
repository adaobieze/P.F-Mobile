// ModalComponent.js
import React from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BackButton from './BackButton';
import {PText} from './PText';

export const Top1 = ({ leftImage, leftStyle, text, rightImage, rightStyle, navigation, rightText, rightPress }) => {
    return (
       <View style={styles.top1}>
            {
                leftImage ?
                <Image source={leftImage} style = {[styles.leftImage, leftStyle]}/>
                :
                <BackButton onPress={()=>navigation.goBack()} style={{width:24, height:24}} />
            }
            <View style={{flex:1, alignItems:"center"}}>
                <PText style={{fontSize:20, fontWeight:"700"}}>{text}</PText>
            </View>
            <TouchableOpacity onPress={rightPress ? rightPress : ()=>console("Hii")}>
            {
                rightImage ?
                <Image source={rightImage} style = {rightStyle}/>
                :
                <View/>
            }
            {
                rightText &&
                <PText style={{fontSize:20, fontWeight:"500"}}>{rightText}</PText>
            }
            </TouchableOpacity>
            
       </View>
    );
}
const styles = StyleSheet.create({
    top1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#000",
        padding:20,
        marginTop:50
    },
    leftImage:{
        width: 41,
        height: 41,
        borderRadius: 41,
        borderWidth: 1,
        borderColor:"#000",
    }
})
