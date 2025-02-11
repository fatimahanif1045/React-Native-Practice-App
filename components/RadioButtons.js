import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react';

const RadioButtons = () => {
    const [selectedRadio, setSelectedRadio] = useState(1);
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Radio Buttons</Text>
            <TouchableOpacity style={styles.radioButtonContainer} onPress={() => setSelectedRadio(1)}>
                <View style={[styles.radioButtonCircle,selectedRadio === 1 && styles.selectedOuterCircle]} >
                    {selectedRadio == 1 ? <View style={styles.selectedInnerCircle}></View> : null}
                </View>
                <Text style={styles.radioButtonLabel}>Radio 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioButtonContainer} onPress={() => setSelectedRadio(2)}>
                <View style={[styles.radioButtonCircle, selectedRadio === 2 && styles.selectedOuterCircle]} >
                    {selectedRadio == 2 ? <View style={styles.selectedInnerCircle}></View> : null}
                </View>
                <Text style={styles.radioButtonLabel}>Radio 2</Text>
            </TouchableOpacity>
            <Text style={styles.selectedValue}>Selected: Radio {selectedRadio}</Text>


            <Text style={styles.title}>Select a Color</Text>
            <SingleRadioButton
                value="Red"
                selectedValue={selectedValue}
                onPress={handleSelect}
            />
            <SingleRadioButton
                value="Green"
                selectedValue={selectedValue}
                onPress={handleSelect}
            />
            <SingleRadioButton
                value="Blue"
                selectedValue={selectedValue}
                onPress={handleSelect}
            />
            <Text style={styles.selectedValue}>Selected: {selectedValue}</Text>

        </View>
    )
}

const SingleRadioButton = ({ value, selectedValue, onPress }) => {
    return (
        <TouchableOpacity style={styles.radioButtonContainer} onPress={() => onPress(value)}>
            <View style={[styles.radioButtonCircle, selectedValue === value && styles.selected]} />
            <Text style={styles.radioButtonLabel}>{value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    radioButtonCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,
    },
    selected: {
        backgroundColor: '#007BFF',
    },
    radioButtonLabel: {
        fontSize: 18,
    },
    selectedValue: {
        marginTop: 20,
        fontSize: 18,
    },
    selectedOuterCircle: {
        borderColor: '#007BFF', // Change border color when selected
        backgroundColor: '#e0f0ff', // Optional: change the background color of the outer circle when selected
    },
    selectedInnerCircle: {
        width: 10,
        height: 10,
        margin:'auto',
        borderRadius: 7,
        backgroundColor: '#007BFF', // Fill color when selected
    },
});


export default RadioButtons
