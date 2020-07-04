/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SignupScreen, LoginScreen} from './screens/auth';
import {Patient, AddPatient} from './screens/dashboard/patient';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {Icon, Left, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {isLogedIn} from './config/constant';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const myIcon = (nav) => (
  <Icon
    name="menu"
    size={30}
    color="black"
    style={{marginLeft: 15}}
    onPress={() => nav.navigation.openDrawer()}
  />
);
function Root(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="View-Patients"
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
  const [isAuthenticated, setIsAuththenticated] = useState(null);
  useEffect(() => {
    isLogedIn().then((user) => setIsAuththenticated(user));
  }, []);
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          {isAuthenticated ? (
            <Drawer.Navigator
              initialRouteName="View-Patients"
              // navigationOptions={
              //   {
              //     headerStyle: {
              //       backgroundColor: '#f4511e',
              //     },
              //     drawerBackgroundColor: '#262A2C'
              //   }
              // }
            >
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
      </Provider>
    </>
  );
};

export default App;
