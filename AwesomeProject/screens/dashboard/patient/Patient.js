import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import SearchBar from '../../../components/Input';
import {NavigationContainer} from '@react-navigation/native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import PatientCard from '../../../components/Card';
import {connect} from 'react-redux';
import {
  getPatientRequest,
  deletePatientRequest,
  stopPatientListner,
} from '../../../redux/actions/Patient';

const Patient = (props) => {
  const [date, seDate] = useState(undefined);
  const [search, setSearch] = useState('');
  const {navigation} = props;
  useEffect(() => {
    console.log(props.getPatientRequest, 'useEffect');
    props.getPatientRequest();
    return () => {
      console.log('CANCEL==--=>');
      props.stopPatientListner();
    };
  }, []);

  const hanldeSearch = (e) => {
    console.log('handle serach');
    setSearch(e);
  };

  console.log('pateint records', props.patientRecords.patients);
  let {patientRecords} = props;
  return (
    <View style={styles.filters}>
      <View style={{height: 20}}></View>
      <SearchBar
        value={search}
        placeholder="Search"
        onChangeText={(e) => hanldeSearch(e, 'Search')}
      />
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
        {/* <FlatList
        // style={{marginBottom:0}}
          data={props.patientRecords.patients}
          renderItem={({item, index}) => (
            <PatientCard
              name={item.patientName}
              onLongPress={() => console.log('onLongPress', item.doctorId)}
            />
          )}
          keyExtractor={(item) => item.doctorId}
        /> */}
        {
          patientRecords && !patientRecords.loading ? (
            patientRecords.patients .filter(
              (patient) =>
                patient.patientName
                  .toUpperCase()
                  .includes(search.toUpperCase()) &&
                (date
                  ? moment(patient.curentTime).isSame(
                      moment(date, 'DD-MMM-YYYY'),
                      'day',
                    )
                  : true),
            ).length ? (
              patientRecords.patients
                .filter(
                  (patient) =>
                    patient.patientName
                      .toUpperCase()
                      .includes(search.toUpperCase()) &&
                    (date
                      ? moment(patient.curentTime).isSame(
                          moment(date, 'DD-MMM-YYYY'),
                          'day',
                        )
                      : true),
                )
                .map((item, index) => (
                  <PatientCard
                    name={item.patientName}
                    key={index}
                    onUpdate={() => {
                      /* 1. Navigate to the Details route with params */
                      navigation.navigate('UpdatePatients', {
                        isUpdate: true,
                        item,
                      });
                    }}
                    onLongPress={() => {
                      Alert.alert(
                        '',
                        'do you really want to delete this patient record',
                        [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {
                            text: 'OK',
                            onPress: () =>
                              props.deletePatientRequest(item.patientId),
                          },
                        ],
                      );
                    }}
                  />
                ))
            ) : (
              <View style={{marginTop: 70}}>
                <Text style={{color: 'red', fontSize: 20, fontWeight: '500'}}>
                  No Records Found
                </Text>
              </View>
            )
          ) : (
            <View style={{marginTop: 70}}>
              <ActivityIndicator size={60} />
            </View>
          )
          //Array.filter((patient)=>(
          // patient.includes(serach)

          //         ))
        }
      </ScrollView>
    </View>
  );
};
export default connect(
  (storeState) => ({
    patientRecords: storeState.PatientReducer,
  }),
  {getPatientRequest, deletePatientRequest, stopPatientListner},
)(Patient);

const styles = StyleSheet.create({
  filters: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
});
