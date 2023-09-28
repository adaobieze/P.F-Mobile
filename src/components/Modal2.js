// ModalComponent.js
import React from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Button from './Button';
import {PText} from './PText';

const ModalComponent2 = ({ visible, onDismiss, handleAllow }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onDismiss}
        >
            <View className='flex-1 justify-center items-center bg-white/10 backdrop-blur space-y-4'>
                <View style={{borderRadius:14, backgroundColor:"#FFF", width:"70%",}}>
                    <View style = {{alignItems:"center", margin:10}}>
                        <PText style={{color:"#000", fontSize:17, fontWeight:"600", textAlign:"center", marginBottom:5}}>“Platinum fuse” Would Like to Send you Notifications</PText>
                        <PText style={{color:"#000", fontSize:13, fontWeight:"400", textAlign:"center"}}>Allowing access to your contacts helps the app find people you know. your contacts will be encrypted, securely stored, and never shared.</PText>
                    </View>
                    <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <TouchableOpacity onPress={onDismiss} style = {[styles.bottom, {borderRightWidth:0.5, borderRightColor:"rgba(0, 0, 0, 0.24)"}]}><PText style={{color:"#007AFF", fontSize:17, fontWeight:"600"}}>Don’t Allow</PText></TouchableOpacity>
                        <TouchableOpacity style = {styles.bottom} onPress={handleAllow}><PText style={{color:"#007AFF", fontSize:17, fontWeight:"600"}}>Allow</PText></TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    bottom:{
        flex:1, 
        alignItems:"center", 
        justifyContent:"center", 
        padding:10,
        borderTopWidth:0.5,
        borderTopColor:"rgba(0, 0, 0, 0.24)"
    }
})
export default ModalComponent2;
