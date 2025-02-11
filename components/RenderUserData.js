import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const RenderUserData = (props) => {
    const item = props.item;
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.age}</Text>
            <Text style={styles.item}>{item.occupation}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'pink',
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        borderWidth: 3,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    }
})
export default RenderUserData;
