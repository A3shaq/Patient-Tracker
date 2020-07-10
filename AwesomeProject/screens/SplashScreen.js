import React from 'react';
import {View, Image} from 'react-native';
import logo from '../assests/images/logo.png';
const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={logo} />
    </View>
  );
};

export default SplashScreen;
