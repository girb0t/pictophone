import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Button } from '../components/common';

class Landing extends Component {
  render() {
    const {
      titleStyle,
      buttonContainerStyle,
      titleContainerStyle,
      screenContainerStyle
    } = style;
    return (
      <View style={screenContainerStyle}>
        <View style={titleContainerStyle}>
          <Text style={titleStyle}>Picto</Text>
          <Text style={titleStyle}>Phone</Text>
        </View>
        <View>
          <View style={buttonContainerStyle}>
            <Button onPress={(() => console.log('Start'))}>
              Start
            </Button>
          </View>
          <View style={buttonContainerStyle}>
            <Button onPress={(() => console.log('Gallery'))}>
              Gallery
            </Button>
          </View>
          <View style={buttonContainerStyle}>
            <Button onPress={(() => console.log('Rules'))}>
              Rules
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const style = {
  screenContainerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  titleContainerStyle: {
  },
  titleStyle: {
    fontSize: 50,
    alignSelf: 'center',
    // borderWidth: 1,
  },
  buttonContainerStyle: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // borderWidth: 1,
  }
};

export default Landing;
