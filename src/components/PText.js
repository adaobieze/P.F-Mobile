// ModalComponent.js
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Button from './Button';

export const PText = ({ children, style}) => {
    return (
        <Text style = {[styles.text, style]}>
            {children}
        </Text>
    );
}
const styles = StyleSheet.create({
    text:{
        color: "#FFF",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "400",
    }
});

