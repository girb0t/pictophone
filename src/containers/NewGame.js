import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Input, Button } from '../components/common';
import { phraseInputValueChanged } from '../actions';

class NewGame extends Component {
  onPhraseChange(newPhrase) {
    this.props.phraseInputValueChanged(newPhrase);
  }

  render() {
    console.log(this.props.phraseInputValue)
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
            value={this.props.phraseInputValue}
            placeholder='Your phrase...'
            onChangeText={newPhrase => this.onPhraseChange(newPhrase)}
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

const mapStateToProps = (state) => {
  const { phraseInputValue } = state.game;
  return { phraseInputValue };
};

export default connect(mapStateToProps, {
  phraseInputValueChanged
})(NewGame);
