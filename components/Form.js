import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';
import styles from '../assets/styles';  // Importing external styles

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [display, setDisplay] = useState(false);

    const resetFormData = () => {
        setDisplay(false);
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Form in React Native</Text>

            <TextInput style={style.input}
                placeholder="Enter your name here"
                value={name}
                onChangeText={(name) => setName(name)}
            />

            <TextInput style={style.input}
                placeholder="Enter your Email here"
                value={email}
                onChangeText={setEmail} // Updates the state with the entered email
            />

            <TextInput style={style.input}
                placeholder="Enter Password"
                value={password}
                secureTextEntry={true}               //  secureTextEntry={passwordVisible}
                onChangeText={text => setPassword(text)}
            />

            <View style={{ marginBottom: 10 }}>
                <Button title="Submit" onPress={() => setDisplay(true)} />
            </View>
            <Button title="Clear Details" onPress={resetFormData} />

            <View>
                {
                display ?
                    <View><Text>Entered Name: {name}</Text>
                        <Text>Entered Email: {email}</Text>
                        <Text>Entered Password: {password}</Text>
                    </View>
                    : null
                }
            </View>

        </View>
    );
};

const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'pink',
        borderWidth: 2,
        marginBottom: 20,
        
        //width: '80%',
        paddingLeft: 10,
        backgroundColor: 'lightblue',
        width: 350,
    },
});

/*
<Button
                title={passwordVisible ? '🐵' : '🙈'}
                color={'white'}
                onPress={
                    passwordVisible
                        ? () => setPasswordVisible(false)
                        : () => setPasswordVisible(true)
                }></Button>

            <Button title={securePassword ? '🙈' : '🐵'} color={'white'}
                onPress={securePassword ? () => unSecurePassword(false) : () => unSecurePassword(true)}></Button>
                */
export default Form;
