import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {addPatientRequest} from '../../../redux/actions/Patient';

const AddPatient = (props) => {
  const [fields, setFileds] = useState({
    patientName: '',
    disease: '',
    mobileNumber: '',
    email: '',
    homeAddress: '',
  });
  let {navigation} = props;
  //handle patient
  const handlePatient = (text) => {
    setFileds({...fields, patientName: text});
  };
  // handle patient
  const handleDisease = (text) => {
    setFileds({...fields, disease: text});
  };
  // handle mobile number
  const handleMobileNumber = (text) => {
    setFileds({...fields, mobileNumber: text});
  };
  // handle email
  const handleEmail = (text) => {
    setFileds({...fields, email: text});
  };
  // handle homeAddress
  const homeAddress = (text) => {
    setFileds({...fields, homeAddress: text});
  };

  const addpatient = () => {
    console.log('addPatient', props.addPatientRequest);
    const {patientName, disease, mobileNumber, email, homeAddress} = fields;

    if (
      patientName.trim() &&
      disease.trim() &&
      mobileNumber.trim() &&
      email.trim() &&
      homeAddress.trim()
    ) {
      console.log('okay ki report hai');
      props.addPatientRequest(fields);
      // setFileds({})
    } else alert('fields are not empty');
  };
  console.log('fields', fields);
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
        <Input
          placeholderTextColor="black"
          placeholder="Patient Name"
          onChangeText={handlePatient}
          value={fields.patientName}
        />
        <Input
          placeholderTextColor="black"
          placeholder="Disease"
          onChangeText={handleDisease}
          value={fields.disease}
        />

        <Input
          placeholderTextColor="black"
          placeholder="Mobile Number"
          keyboardType="numeric"
          onChangeText={handleMobileNumber}
          value={fields.mobileNumber}
        />
        <Input
          placeholderTextColor="black"
          placeholder="Email"
          onChangeText={handleEmail}
          value={fields.email}
        />
        <Input
          placeholderTextColor="black"
          placeholder="Home Address"
          onChangeText={homeAddress}
          value={fields.homeAddress}
        />

        <Button onPress={addpatient}>
          <Text style={styles.textColor}>Save</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default connect(null, {addPatientRequest})(AddPatient);

const styles = StyleSheet.create({
  formStyle: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
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
