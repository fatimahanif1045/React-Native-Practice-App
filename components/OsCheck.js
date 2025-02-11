import { View, Text, StyleSheet, Platform, ImageBackground } from 'react-native'
import React from 'react'

const OsCheck = () => {
    console.warn(Platform)
  return (
    <View>
      <Text style={styles.text}>Platform: {Platform.OS}</Text>
      {
        Platform.OS =='android'?
        <Text style={{backgroundColor:'yellow', height:100, width:100}}> </Text>
        :
        <Text style={{backgroundColor:'green', height:100, width:100}}> </Text>
      }
      <Text style={{fontSize:20}}>Platform Info: {JSON.stringify(Platform)}</Text>
      <Text style={{fontSize:20, color:'#000'}}>React native version: 
        {Platform.__constants.reactNativeVersion.minor}</Text>
      </View>
  )
}
const styles= StyleSheet.create({
    text:{
        color:Platform.OS =='android'?'orange':'blue',
        fontSize:20
    }
})

export default OsCheck