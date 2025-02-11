import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PressableComp = () => {
    return (
        <View style={styles.main}>
            <Pressable
                onPress={() => console.warn('normal press')}
                onLongPress={() => console.warn('on Long press')}
                onPressIn={() => console.warn(' on Press In')}
                onPressOut={() => console.warn('on Press Out')}
            >
                <Text style={styles.pressableButton}>press</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    pressableButton: {
        color: '#fff',
        backgroundColor: 'blue',
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        elevation: 5,
    }
})
export default PressableComp