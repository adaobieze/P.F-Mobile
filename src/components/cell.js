import React from "react";
import { Pressable, Text, View, Image, StyleSheet } from 'react-native';

export default function Cell({ interest, clicked }) {
    return (
        <View style ={[styles.cell, {backgroundColor:clicked ? "#D0A159" : "#D9D9D9"}]}>
            <Text style = {styles.text}>{interest}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    cell:{
        padding:8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#D9D9D9",
    },
    text:{
        color: "#000",
        fontSize: 14,
        fontWeight: "500",
    }
});