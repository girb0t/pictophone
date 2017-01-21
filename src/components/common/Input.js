import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ value, label, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  const labelNode = label ? <Text style={labelStyle}>{label}</Text> : null;
  return (
    <View style={containerStyle}>
      {labelNode}
      <TextInput
        value={value}
        style={inputStyle}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    borderWidth: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    // borderWidth: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1
  }
};

export { Input };
