import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
  const {placeholder, style} = props;
  return (
    <TextInput
      style={style || styles.inputStyles}
      placeholder={props.placeholder ? props.placeholder : 'Placeholder'}
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  inputStyles: {
    borderWidth: 2,
    borderColor: '#1ca2a7',
    maxWidth: 300,
    width: 500,
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    color: 'black',
  },
});
