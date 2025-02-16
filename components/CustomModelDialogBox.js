import React, { useState } from 'react'
import { View, Text, Modal, Button, StyleSheet } from 'react-native'

const DialogBox = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <View style={styles.container}>
            {
                showModal ?
                    <view>
                        <View style={styles.modal}>
                            <View style={styles.body}>
                                <Text style={styles.modalText}>hello world </Text>
                                <Button title='close modal' onPress={() => setShowModal(false)} />
                            </View>
                        </View>
                    </view>
                    : null
            }
        <Button title='open modal' onPress={() => setShowModal(true)} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(50,50,50,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        backgroundColor: '#fff',
        height: 300,
        width: 300,
        padding: 20,
        justifyContent: 'flex-end',
        borderRadius: 10
    }
})

export default DialogBox