import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ClassComp extends Component {
  // Defining the state
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Method to handle button click
  incrementCount = () => {
    console.warn('hihi')
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.incrementCount} />
      </View>
    );
  }
}

export default ClassComp;
