import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Button from '../../../components/Button';
import SearchBar from '../../../components/Input';
import {NavigationContainer} from '@react-navigation/native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import PatientCard from '../../../components/Card';
import {Item} from 'native-base';
const Patient = (props) => {
  const [date, seDate] = useState(moment());
  const {navigation} = props;
  return (
    <View style={styles.filters}>
      <View style={{height:20}}></View>
      <SearchBar placeholder="Search" />
      <View>
        {/* <View> */}

        {/* </View>
        <View> */}
        <DatePicker
          style={{
            width: 315,
            padding: 8,
            // borderColor: '#1ca2a7',
            // borderRadius: 20,
          }}
          customStyles={{
            dateInput: {
              padding: 15,
              borderColor: '#1ca2a7',
              borderRadius: 8,
              width: 500,
              borderWidth: 2,
              margin: 0,
            },
            dateIcon: {
              position: 'absolute',
              right: 0,
              top: 4,
              marginLeft: 0,
            },
          }}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD-MMM-YYYY"
          onDateChange={(date) => seDate(date)}
        />
        {/* </View>*/}
      </View>

      <ScrollView>
        {[1, 2, 3, 4, 5, 6, 8].map((Item, index) => (
          <PatientCard name="Zain Ahmed" key={index} />
        ))}
        {/* <PatientCard/>
        <PatientCard/>
        <PatientCard/>
        <PatientCard/>
        <PatientCard/>
        <PatientCard/> */}
      </ScrollView>
    </View>
  );
};

export default Patient;

const styles = StyleSheet.create({
  filters: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
});
