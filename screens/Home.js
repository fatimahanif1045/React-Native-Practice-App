import { Text, View, Button } from 'react-native';
import React, { useState } from 'react';

import ButtonComponent from '../components/ButtonComponent';
import Form from '../components/Form';
import styles from '../assets/styles';  // Importing external styles
import { List } from '../components/List';
import SectionListComp from '../components/SectionListComp';
import ClassComp from '../components/ClassComp';
import UseEffectHookComp from '../components/UseEffectHookComp';
import ToggleComp from '../components/ToggleComp';
import ResponsiveLayout from '../components/ResponsiveLayout';

function fun() {
    return 'Have fun learning React Native';
}
const Home = () => {
    const [month, setMonth] = useState('april')
    let age = 66;

    return (
        <View>
            <Text style={styles.titleText}> {age === 7 ? 'child' : fun()}</Text>
            <Button title='press change month' onPress={() => setMonth('jun')} ></Button>

            <View>
                <ButtonComponent month={month} />
                <Form />
                <List />
                <SectionListComp />
                <ClassComp />
                <UseEffectHookComp />
                <ToggleComp />
            </View>
        </View>
    );
};

export default Home

