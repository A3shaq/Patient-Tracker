/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// import EventList from './EventList';
import {SignupScreen, LoginScreen} from './screens/auth';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {StackNaviagtor} from 'react-navigation'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Stack = createStackNavigator();
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
      </NavigationContainer>
      {/* </View> */}
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'green',
//   },
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: 'green',
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
