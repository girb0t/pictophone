import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Input, Button } from '../components/common';

class NewGame extends Component {
  render() {
    const {
      containerStyle,
      inputContainerStyle,
      buttonContainerStyle
    } = styles;
    return (
      <View style={containerStyle}>
        <View>
          <Text>Think of something the next person should draw. Examples:</Text>
          <Text>{`\u2022 Ninja Cat`}</Text>
          <Text>{`\u2022 Spiderman Skiing`}</Text>
        </View>
        <View style={inputContainerStyle}>
          <Input
            value=''
            placeholder='Your phrase...'
            nChangeText={(yolo) => console.log('text changed')}
          />
        </View>
        <View style={buttonContainerStyle}>
          <Button onPress={() => console.log('NEXT TURN')}>
            Start Game
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    width: null,
    height: null,
    flex: 1,
    padding: 10,
  },
  inputContainerStyle: {
    width: null,
    height: 40,
  },
  buttonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  }
};

export default NewGame;
