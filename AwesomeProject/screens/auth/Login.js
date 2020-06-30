import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Logo from '../../assests/images/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlChange = (e, key) => {
    let set;
    console.log(e);
    {
      key === 'Email' ? setEmail(e) : setPassword(e);
    }
  };
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <View
        style={{
          flex: 0.4,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={Logo} style={styles.imageStyle} />
      </View>

      <Text style={styles.heading}>Login</Text>
      <View>
        <Input
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={(text) => handlChange(text, 'Email')}
        />
        <Input
          placeholderTextColor="black"
          placeholder="Password"
          value={password}
          onChangeText={(text) => handlChange(text, 'Password')}
        />
      </View>
      <View>
        <Button onPress={() => alert('Login Button')}>
          <Text style={styles.textColor}>SignIn</Text>
        </Button>
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Register')}>
          Don't have an account?
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  heading: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    // fontStyle:"italic",
    fontWeight: '700',
  },
  imageStyle: {
    height: 75,
    width: 75,
  },

  textColor: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
    marginTop: 15,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
});
