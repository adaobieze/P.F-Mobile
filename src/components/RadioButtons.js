// RadioButton.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = ({ options = [], onChange, label, error, errorStyle }) => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (value) => {
        setSelected(value);
        onChange(value);
    }

    return (
        <View className='mb-4'>
            {/* <Text style={styles.label}>{label}</Text> */}
            <Text className={`mb-2 text-lg font-medium text-white`}>{label}</Text>
            <View style={styles.container}>
                {options.map((option, index) => (
                    <View key={index} style={styles.optionWrapper}>
                        <TouchableOpacity
                            style={styles.optionContainer}
                            onPress={() => handleSelect(option)}
                        >
                            {selected === option && 
                            <View style={styles.selectedStyle}></View>}
                            <Text style={styles.optionText}>{option.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            {error && <Text className={`text-error mt-2 text-sm ${errorStyle}`} >{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // flexWrap: 'wrap'
    },
    label: {
        fontSize: 18,
        fontWeight:'600',
        color: 'white',
        marginBottom: 10
    },
    optionWrapper: {
        alignItems: 'center',
        marginBottom: 5
    },
    optionContainer: {
        height: 44,
        width: 120,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: 'white'
    },
    selectedStyle: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#EDAE1A',
    },
    optionText: {
        fontSize: 16,
        color: 'black'
    }
});

export default RadioButton;
