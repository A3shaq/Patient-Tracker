import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {RegisterWithFirebase} from '../../config/firebase';

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
    alert('Register');
    RegisterWithFirebase(name, email, password);

    alert('success');
  };
  console.log('my name is', name);
  console.log('my email is', email);
  console.log('my password is', password);
  return (
    <View>
      <Text>Signup Form</Text>
      <View>
        <TextInput
          placeholder="Name"
          // style={{borderStyle:["solid","dotted","dashed"]}}
          value={name}
          onChangeText={(text) => handlChange(text, 'Name')}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => handlChange(text, 'Email')}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => handlePassword(text, 'Password')}
        />
        <TouchableOpacity
          style={{backgroundColor: 'blue'}}
          onPress={onRegister}>
          <Text>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
