import { View, Text } from 'react-native'
import React from 'react'
//it need flex 1 in main view i.e app.js
const ResponsiveLayout = () => {
  return (
         <View style={{ flex: 1 }}>
             <View style={{ flex: 2, backgroundColor: 'pink', flexDirection:'row'}}>
                 <View style={{ flex: 2, backgroundColor: 'yellow',margin:20 }}></View>
                 <View style={{ flex: 1, backgroundColor: 'orange',margin:20 }}></View>
                 <View style={{ flex: 1, backgroundColor: 'lightblue', margin:20 }}></View>
             </View>
             <View style={{ flex: 1, backgroundColor: 'green' }}></View>
             <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
         </View>
     )
}

export default ResponsiveLayout