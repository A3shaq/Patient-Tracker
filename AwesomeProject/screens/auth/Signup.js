import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {RegisterWithFirebase} from '../../config/firebase';
import Logo from '../../assests/images/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {signUpRequest} from '../../redux/actions/Auth';
import {store} from '../../redux/store';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlChange = (e, key) => {
    let set;
    console.log(e);
    {
      key === 'Email' ? setEmail(e) : setName(e);
    }
  };

  const handlePassword = (e) => {
    setPassword(e);
  };

  const onRegister = () => {
    // alert('Register');
    console.log('register props', signUpRequest);
    props.signUpRequest(name, email, password);

    // alert('success');
  };
  console.log('my name is', name);
  console.log('my email is', email);
  console.log('my password is', password);
  let {navigation} = props;
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View
          style={{
            flex: 0.6,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Logo} style={styles.imageStyle} />
        </View>
        <Text style={styles.heading}>Signup</Text>
        <View>
          <Input
            placeholder="Name"
            placeholderTextColor="black"
            // style={{borderStyle:["solid","dotted","dashed"]}}
            value={name}
            onChangeText={(text) => handlChange(text, 'Name')}
          />

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
            onChangeText={(text) => handlePassword(text, 'Password')}
            secureTextEntry={true}
          />
        </View>
        <View>
          <Button onPress={onRegister}>
            <Text style={styles.textColor}>Register</Text>
          </Button>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Login')}>
            Already have an account?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default connect(
  (storeState) => ({
    authData: storeState.AuthReducer,
  }),
  {signUpRequest},
)(Signup);

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
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
    marginTop: 60,
  },
});
