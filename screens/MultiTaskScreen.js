import { View, Text } from 'react-native'
import React from 'react'
import ActivityIndicatorComp from '../components/ActivityIndicatorComp';
import DialogBox from '../components/DialogBox';
import PressableComp from '../components/PressableComp';
import StatusBarComp from '../components/StatusBarComp';
import OsCheck from '../components/OsCheck';
const MultiTaskScreen = () => {
    return (
        <View>
            <Text>MultiTaskScreen</Text>
            <ActivityIndicatorComp />
            <DialogBox />
            <PressableComp />
            <StatusBarComp />
            <OsCheck />
        </View>
    )
}

export default MultiTaskScreen