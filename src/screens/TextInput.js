// Input.js
import React, { forwardRef } from 'react';
import { View, TextInput, Text } from 'react-native';

export const TextInput1 = ({type, placeholder}) => {
  return (
      <TextInput 
       placeholder={placeholder ? placeholder : ""}
       multiline = {type == "large" ? true : false}
       style = {{width:"100%", height:type == "large" ? 158 : 44, borderRadius:5, backgroundColor:"#D9D9D9", textAlignVertical:'top',
    padding:10}}
      />
  );
  }

