import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorage = () => {
    const [user, setUser] = useState('');
    const setData = async () => {
        await AsyncStorage.setItem('user', 'Ahmad')
    }
    const getData = async () => {
        let data = await AsyncStorage.getItem('user')
        setUser(data);
    }
    const removeData = async () => {
        await AsyncStorage.getItem('user')
        setUser('');
    }
    return (
        <View>
            <Text>LocalStorage | {user}</Text>
            <Button title= 'set data' onPress={setData}/>
            <Button title= 'get data' onPress={getData}/>
            <Button title= 'remove data' onPress={removeData}/>
        </View>
    )
}

export default LocalStorage