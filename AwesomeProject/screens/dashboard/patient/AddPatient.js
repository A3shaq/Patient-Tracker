import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {
  addPatientRequest,
  updatePatientRequest,
} from '../../../redux/actions/Patient';

const AddPatient = (props) => {
  let {navigation, route} = props;
  let {item} = route.params || {};
  console.log('item', item);

  const [isUpdate, setIsUpdate] = useState(
    route.params && route.params.isUpdate ? route.params.isUpdate : false,
  );
  const [fields, setFileds] = useState({
    patientName: (item && item.patientName) || '',
    disease: (item && item.disease) || '',
    mobileNumber: (item && item.mobileNumber) || '',
    email: (item && item.email) || '',
    homeAddress: (item && item.homeAddress) || '',
  });

  // useEffect(() => {
  //   return () => setIsUpdate(false);
  // });
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

  //add patient
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
    } else alert('Ankho wala bhai');
  };

  //update patient
  const updatePatient = () => {
    const {patientName, disease, mobileNumber, email, homeAddress} = fields;

    if (
      patientName.trim() &&
      disease.trim() &&
      mobileNumber.trim() &&
      email.trim() &&
      homeAddress.trim()
    ) {
      alert('Update');
      let {patientId} = item;
      // console.log('Patient RecordId', patientId);
      const obj = {...fields, patientId};
      console.log('obj==>', obj);
      props.updatePatientRequest(obj);
    } else alert('fileds are not empty');
  };

  console.log('fields==>props', route.params);
  console.log('route params', isUpdate);
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
        <Text style={styles.heading}>
          {isUpdate ? `Update Patient` : `Add Patient`}
        </Text>
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

        <Button onPress={isUpdate ? updatePatient : addpatient}>
          <Text style={styles.textColor}>{isUpdate ? 'Update' : 'Save'}</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default connect(null, {addPatientRequest, updatePatientRequest})(
  AddPatient,
);

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
