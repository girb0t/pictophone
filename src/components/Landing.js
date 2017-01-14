import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Landing extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 100 }}>Landing</Text>
      </View>
    );
  }
}

export default Landing;
