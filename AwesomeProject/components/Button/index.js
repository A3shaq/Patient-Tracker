import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const Button = (props) => {
  const {style} = props;
  return <TouchableOpacity style={style || styles.buttonStyles} {...props} />;
};

export default Button;

const styles = StyleSheet.create({
  buttonStyles: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#4eb6bb',
    marginTop: 20,
    width: 300,
  },
});
