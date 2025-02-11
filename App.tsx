import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import Home from './screens/Home';
import Responsive from './screens/Responsive';
import ActivityIndicatorCopm from './components/ActivityIndicatorCopm';
import DialogBox from './components/DialogBox';
import PressableComp from './components/PressableComp';
import StatusBarComp from './components/StatusBarComp';
import OsCheck from './components/OsCheck';

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
    return (
        <View style={{ flex: 1 }}>
            {
                //  <Home />
                // <Responsive />
                // <ActivityIndicatorCopm/>
                // <DialogBox/>
                // <PressableComp/>
                // <StatusBarComp />
                // <OsCheck />
            }
            
        </View>
    );
};

export default App;
