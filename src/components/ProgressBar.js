import React from 'react';
import { View } from 'react-native';

const ProgressBar = ({step}) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 11, height: 11, borderRadius: 5, backgroundColor: step >= 1 ? '#EDAE1A' : 'grey' }} />
        <View style={{ width: 16, height: 2, backgroundColor: step > 1 ? '#EDAE1A' : 'grey' }} />
        <View style={{ width: 11, height: 11, borderRadius: 5, backgroundColor: step >= 2 ? '#EDAE1A' : 'grey' }} />
        <View style={{ width: 16, height: 2, backgroundColor: step > 3 ? '#EDAE1A' : 'grey' }} />
        <View style={{ width: 11, height: 11, borderRadius: 5, backgroundColor: step >= 4 ? '#EDAE1A' : 'grey' }} />
      </View>
    );
};

export default ProgressBar;