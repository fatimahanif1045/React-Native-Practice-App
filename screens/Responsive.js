import { View } from 'react-native'
import React from 'react'
import ResponsiveLayout from '../components/ResponsiveLayout';
import CustomTouchableHighlight from '../components/CustomTouchableHighlight';
import RadioButtons from '../components/RadioButtons';
import DynamicRadioButton from '../components/DynamicRadioButton';

const Responsive = () => {
    return (
        <View style={{ flex: 1 }}>
            {
                // <ResponsiveLayout />
                // <CustomTouchableHighlight/>
                // <RadioButtons/>
            }
            <DynamicRadioButton/>
        </View>
    )
}

export default Responsive