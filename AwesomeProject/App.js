/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import EventList from './EventList';
import {SignupScreen, LoginScreen} from './screens/auth';
import {Patient, AddPatient} from './screens/dashboard/patient';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {Icon, Left, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const myIcon = (nav) => (
  <Icon
    name="menu"
    size={30}
    color="black"
    style={{marginLeft: 5}}
    onPress={() => nav.navigation.openDrawer()}
  />
);
function Root(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Patient}
        options={{
          title: 'Patient Records',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#4eb6bb',
          },
          headerTintColor: '#fff',
          headerLeft: () => myIcon(props),
        }}
      />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <>
      {/* <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}> */}
      {/* <View> */}
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
      {/* <Button title="123" /> */}
      {/* </View> */}

      <NavigationContainer>
        {true ? (
          <Drawer.Navigator initialRouteName="View-Patients">
            <Drawer.Screen name="View-Patients" component={Root} />
            <Drawer.Screen name="AddPatients" component={AddPatient} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: ' Please Login to Continue',
                headerStyle: {
                  backgroundColor: '#4eb6bb',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Register"
              options={{
                title: 'Back to Login',
                headerStyle: {
                  backgroundColor: '#4eb6bb',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
              component={SignupScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
      {/* </View> */}
    </>
  );
};

export default App;
