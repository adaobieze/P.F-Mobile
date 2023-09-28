// Input.js
import React, { forwardRef } from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PText } from './PText';

const Input = forwardRef(({
  label, value, color, onChangeText, placeholder, placeholderColor, autoCompleteType, keyboardType, textContentType, readOnly, returnKeyType, onSubmitEditing, onLayout, onFocus, error, errorStyle, style, image, buttonStyle
}, ref) => {
  return (
    <View className='mb-4' onLayout={onLayout}>
      {label && <Text className={` text-lg font-medium text-white`}>{label}</Text>}
      <View className={`border-white border-2 bg-white rounded-md p-2 h-14 text-xl`} style = {[{flexDirection:"row", alignItems:"center"},style]}>
        <TextInput 
          value={value} 
          style={{flex:1}}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor = {placeholderColor ? placeholderColor : "gray"}
          color = {color ? color : "gray"}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          textContentType={textContentType}
          readOnly={readOnly}
          returnKeyType={returnKeyType}
          ref={ref}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={false}
          onFocus={onFocus}
        />
        {
          image &&
          <Image style = {{width:37, height:28}} source = {image}/>
        }
        {
          buttonStyle &&
          <TouchableOpacity style = {buttonStyle}>
              <PText style={{color:"#000"}}>Copy</PText>
          </TouchableOpacity>
        }
      </View>
      {error && <Text className={`text-error mt-2 text-sm ${errorStyle}`} >{error}</Text>}
    </View>
  );
})

export default Input;
