import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';

const AddPatient = (props) => {
  let {navigation} = props;
  return (
    <ScrollView>
      <Icon
        name="arrow-left"
        color="black"
        size={30}
        style={{marginLeft: 10, marginTop: 10}}
        onPress={() => navigation.goBack()}
      />
      <Text
        style={{
          position: 'absolute',
          top: 16,
          left: 40,
          marginLeft: 8,
          fontWeight: '600',
          fontSize: 15,
        }}>
        Patient Records
      </Text>
      <View style={styles.formStyle}>
        <Text style={styles.heading}>Add Patient</Text>
        <Input placeholderTextColor="black" placeholder="Patient Name" />
        <Input placeholderTextColor="black" placeholder="Disease" />

        <Input
          placeholderTextColor="black"
          placeholder="Mobile Number"
          keyboardType="numeric"
        />
        <Input placeholderTextColor="black" placeholder="Email" />
        <Input placeholderTextColor="black" placeholder="Home Address" />

        <Button>
          <Text style={styles.textColor}>Save</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default AddPatient;

const styles = StyleSheet.create({
  formStyle: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop:40
  },
  textColor: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  heading: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    // fontStyle:"italic",
    fontWeight: '700',
  },
});
