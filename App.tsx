import React, { useState } from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // For login/signup screens

import Home from './screens/Home';
import Responsive from './screens/Responsive';
import MultiTaskScreen from './screens/MultiTaskScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    /*  const [apidata, setApidata] = useState([])
      let url = "https://jsonplaceholder.typicode.com/posts/1"
      let response = fetch(url)
  
      const handleButtonPress = async () => {
          const response = await fetch(url);
          const result = await response.json();
          setApidata(result);
        };
        
      console.warn(apidata)
  */
 const btnAction = () =>{

 }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'blue',
                    },
                    headerTintColor: 'orange',
                    /*headerTintStyle: {
                        fontSize: 25,
                    }*/
                }}
            >
                <Stack.Screen name="Home" component={Home}
                    options={{
                        headerTitle: () => <Button onPress={btnAction} title='Left' />,
                        headerRight: () => <Button title='Right' />,
                        title: 'main screen',
                        headerStyle: {
                            backgroundColor: 'skyblue',
                        },
                        headerTintColor: 'white',
                        /*headerTintStyle: {
                            fontSize: 40,
                        }*/
                    }}
                />
                <Stack.Screen name="Responsive" component={Responsive} />
                <Stack.Screen name="MultiTask" component={MultiTaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App