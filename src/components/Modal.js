// ModalComponent.js
import React from 'react';
import { Modal, Text, View, Image } from 'react-native';
import Button from './Button';

const ModalComponent = ({ visible, onDismiss, content, dismissText, imgStyle, image, secondaryDismissText, secondaryOnDismiss, secondaryButtonStyle, secondaryTextStyle }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onDismiss}
        >
            <View className='flex-1 justify-center items-center bg-white/10 backdrop-blur space-y-4'>
                <View className='w-4/5 bg-black rounded-lg p-5'>
                    <View className='w-6 h-6 bg-primary p-10 rounded-full self-center justify-center items-center '>
                        {image && <Image className={`${imgStyle}`} source={image} />}
                    </View>
                    <View>
                        <Text className='text-lg text-white'>{content}</Text>
                    </View>
                    <View className="flex flex-row justify-between">
                        <Button
                            onPress={onDismiss} 
                            text={dismissText}
                            buttonStyle='mt-5 bg-primary rounded-lg py-2 flex-grow w-[40%]'
                            textStyle='text-black font-semibold text-lg'
                        />
                        {secondaryDismissText && 
                            <Button
                                onPress={secondaryOnDismiss}
                                text={secondaryDismissText}
                                buttonStyle={`mt-5 rounded-lg py-2 flex-grow w-[40%] ml-4 ${secondaryButtonStyle}`}
                                textStyle={secondaryTextStyle}
                            />
                        }
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalComponent;
