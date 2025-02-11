import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';

const CustomTouchableHighlight = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CustomTouchableHighlight</Text>
            <TouchableHighlight>
                <Text style={styles.buttonText}> button</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.buttonText, styles.primary]}> primary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.buttonText, styles.succes]}> succes</Text>
            </TouchableHighlight>
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
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'green', // White text color
        color: '#FFF', // White text color
        paddingVertical: 15,
        paddingHorizontal: 30,
        margin: 10,
        textAlign: 'center',
        borderRadius: 15,
        shadowColor: 'blue',
        elevation: 20,
        shadowOpacity: 0.5,
    },
    primary: { backgroundColor: 'pink' },
    succes: { backgroundColor: 'yellow' },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default CustomTouchableHighlight
