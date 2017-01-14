import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Landing extends Component {
  render() {
    const { titleStyle } = style;
    return (
      <View>
        <Text style={titleStyle}>Pictophone</Text>
      </View>
    );
  }
}

const style = {
  titleStyle: {
    fontSize: 50,
    alignSelf: 'center',
    paddingTop: 40
  }
};

export default Landing;
