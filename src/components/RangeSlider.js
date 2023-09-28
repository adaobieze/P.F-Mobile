import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const RangePicker = ({min, max, onValuesChange, label, error, errorStyle = ''}) => {
    const [values, setValues] = useState([min, max]);

    const handleValuesChange = (values) => {
        setValues(values);
        onValuesChange(values);
    };

    return (
        <View className='my-4 px-4 w-full'>
            <View className='flex flex-row justify-between -mx-4'>
                {label && <Text className='text-lg font-semibold text-white'>{label}</Text>}
                {label && <Text className='text-lg font-semibold text-white'>{`${values[0]} - ${values[1]}`}</Text>}
            </View>
            <MultiSlider
                values={[values[0], values[1]]}
                onValuesChange={handleValuesChange}
                sliderLength={350}
                min={min}
                max={max}
                step={1}
                allowOverlap
                snapped
                minMarkerOverlapDistance={40} // this must be the size of your marker + overlap from step (optional)
                trackStyle={{height: 5, width:'100%'}} // Make the track a bit thicker
                selectedStyle={{backgroundColor: '#EDAE1A'}} // Make the selected part of the track gold
                markerStyle={{height: 20, width: 20}} // Make the markers a bit larger
            />
            {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    
    error: {
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
    },
});

export default RangePicker;
