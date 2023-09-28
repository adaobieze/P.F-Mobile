// PhotoUpload.js
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PhotoUpload = ({ setImageUri, imageUri }) => {

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need media library permissions to make this work!');
            return;
        }
    
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };
    
    

    return (
        <TouchableOpacity className='w-40 items-center justify-center self-center' onPress={pickImage}>
            {imageUri ? (
                <Image source={{ uri: imageUri }} className='w-36 h-36 rounded-lg'/>
            ) : (
                <View className='w-36 h-36 bg-gray-200 rounded-lg' />
            )}
            <View
                className='absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-full items-center justify-center border-black border-4'
            >
                <Image 
                    source={require('../../assets/images-videos/camera-icon.png')}
                    className='w-5 h-5'
                />
            </View>
        </TouchableOpacity>
    );
    
};

export default PhotoUpload;