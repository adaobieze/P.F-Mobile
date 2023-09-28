import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CustomPicker = React.forwardRef(({ items, onValueChange, value, placeholder }, ref) => {
    return (
        <RNPickerSelect
            ref={ref}
            onValueChange={onValueChange}
            items={items}
            style={pickerSelectStyles}
            value={value}
            placeholder={{ label: placeholder, value: null }}
            useNativeAndroidPickerStyle={false}
        />
    );
});

const DatePicker = React.forwardRef(({ onDateChange, error, errorStyle, label }, ref) => {
    const dayPickerRef = useRef();
    const monthPickerRef = useRef();
    const yearPickerRef = useRef();

    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 25); // 25 years ago

    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);

    const days = Array.from({ length: 31 }, (_, i) => ({
        label: `${i + 1}`,
        value: i + 1,
    }));

    const months = Array.from({ length: 12 }, (_, i) => ({
        label: `${i + 1}`,
        value: i + 1,
    }));

    const years = Array.from({ length: 101 }, (_, i) => ({
        label: `${maxDate.getFullYear() - i}`,
        value: maxDate.getFullYear() - i,
    }));

    useEffect(() => {
        if(day && month && year){
            const date = `${day < 10 ? "0" + day : day} / ${month < 10 ? "0" + month : month} / ${year}`;
            onDateChange(date);
        }
    }, [day, month, year]);

    return (

        <>
            {label && <Text className={`mb-2 text-lg font-medium text-white`}>{label}</Text>}
            <View style={styles.inputContainer}>
                <CustomPicker ref={dayPickerRef} items={days} onValueChange={setDay} value={day} placeholder="DD" />
                <Text style={styles.separator}> / </Text>
                <CustomPicker ref={monthPickerRef} items={months} onValueChange={setMonth} value={month} placeholder="MM" />
                <Text style={styles.separator}> / </Text>
                <CustomPicker ref={yearPickerRef} items={years} onValueChange={setYear} value={year} placeholder="YYYY" />
            </View>
            {error && <Text className={`text-error mb-6 -mt-4 text-sm ${errorStyle}`} >{error}</Text>}
        </>
       
    );
});

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 25,
    },
    separator: {
        fontSize: 20,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 20,
        paddingVertical: 12,
        borderWidth: 0,
        color: 'black',
        alignItems: 'center',
    },
    inputAndroid: {
        fontSize: 20,
        paddingVertical: 12,
        borderWidth: 0,
        color: 'black',
        alignItems: 'center',
    },
    placeholder: {
        color: 'gray',
    },
});

export default DatePicker;
