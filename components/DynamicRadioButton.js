import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react';

const DynamicRadioButton = () => {
    const skills = [
        {
            id: 1,
            name: 'java',
        },
        {
            id: 2,
            name: 'js',
        },
        {
            id: 3,
            name: 'python',
        },
        {
            id: 4,
            name: 'c++',
        },
    ]
    const [selectedRadio, setSelectedRadio] = useState(1);

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Dynamic Radio Buttons</Text>
            {
                skills.map((item, index) => <TouchableOpacity
                    key={index}
                    style={styles.radioButtonContainer}

                    onPress={() => setSelectedRadio(item.id)}>
                    <View style={[styles.radioButtonCircle, selectedRadio === item.id && styles.selectedOuterCircle]} >
                        {selectedRadio == item.id ? <View style={styles.selectedInnerCircle}></View> : null}
                    </View>
                    <Text style={styles.radioButtonLabel}> {item.name}</Text>
                </TouchableOpacity>
                )
            }
        </View>
    )
}

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
    radioButtonLabel: {
        fontSize: 18,
    },
    selectedOuterCircle: {
        borderColor: '#007BFF', // Change border color when selected
        backgroundColor: '#e0f0ff', // Optional: change the background color of the outer circle when selected
    },
    selectedInnerCircle: {
        width: 10,
        height: 10,
        margin: 'auto',
        borderRadius: 7,
        backgroundColor: '#007BFF', // Fill color when selected
    },
});


export default DynamicRadioButton
