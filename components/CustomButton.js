/*
Creating a beautiful custom button in React Native requires styling that enhances both the appearance and interactivity. Below is an example of a custom button with clean design, shadows, and a gradient effect using TouchableOpacity and LinearGradient from the react-native-linear-gradient library.

Steps:
Install the required package:

bash
Copy code
npm install react-native-linear-gradient
Create the custom button component:
*/

import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({ title, onPress, style }) => {
  return (
    <LinearGradient
      colors={['#FF7F50', '#FF6347']} // Gradient colors
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}
      style={[styles.buttonContainer, style]}
    >
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,  // Rounded corners
    overflow: 'hidden', // Ensure the gradient is within the button
    margin: 10, // Margin around the button
    elevation: 5, // Shadow for Android
  },
  button: {
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 25, 
  },
  buttonText: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#FFF', // White text color
  },
});

export default CustomButton;
//Usage Example:
//Copy code
/*import React from 'react';
import { View, Alert } from 'react-native';
import CustomButton from './CustomButton'; // Import custom button

const App = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomButton title="Click Me" onPress={handlePress} />
    </View>
  );
};

export default App;
*/
/*
Key Features:
Gradient Effect: The LinearGradient component gives the button a smooth color transition.
Rounded Corners: The borderRadius creates a smooth, rounded edge for the button.
Shadow: A slight elevation adds a subtle shadow, giving the button a floating appearance on Android devices.
TouchableOpacity: Used for handling user interactions with a visual feedback (button press effect).
You can adjust the gradient colors, padding, and font styles to fit your app's design!


You said:
can i apply this on <Button title="Click Me to alert" onPress={() => alert(Age: ${age})} />:   

const styles = StyleSheet.create({
    customButton:{
        backgroundColor:'#C39178',
        borderRadius: 5,
        fontSize: 25, 
        fontWeight: 'bold', 
        textAlign: 'center',
        textAlignVertical: 'center',
        padding:5,
        margin:5,
        borderColor:'green',
        borderWidth:3

    }
ChatGPT said:
The Button component only accepts limited styles such as color (for the text color) and disabled state.

To apply your custom styling, you would need to replace the Button component with a TouchableOpacity or 
TouchableHighlight component (or other customizable components) where you can define full styles. Below is how you can do that:

Custom Button with TouchableOpacity
You can use your customButton style with TouchableOpacity to apply your customizations, and you can still use the alert with the age:

Updated Code:
jsx
Copy code
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.customButton}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const age = 25; // Just an example, you can use any value

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomButton title="Click Me to alert" onPress={() => alert(`Age: ${age}`)} />
    </View>
  );
};

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: '#C39178',  // Custom background color
    borderRadius: 5,              // Rounded corners
    paddingVertical: 10,          // Padding inside the button
    paddingHorizontal: 20,        // Horizontal padding for button text
    margin: 5,                    // Margin around the button
    borderColor: 'green',         // Border color
    borderWidth: 3,               // Border width
  },
  buttonText: {
    fontSize: 25,                 // Font size
    fontWeight: 'bold',           // Font weight
    textAlign: 'center',          // Center text horizontally
    textAlignVertical: 'center',  // Center text vertically (not supported on Android, but still a good practice)
    color: 'white',               // Text color
  },
});

export default App;
Explanation of changes:
TouchableOpacity: I replaced the default Button with TouchableOpacity to have full control over the styling.
Text: We added a Text component inside TouchableOpacity to display the title.
Style: The customButton style is applied to the TouchableOpacity for background color, border, padding, and margin.
Text Style: The buttonText style is applied to the text inside the button to control the font size, weight, color, and alignment. 

*/