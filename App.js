/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {SetupPinScreen} from './Components/SetupPinScreen';
import {LoginForm} from './Components/LoginForm';
import {EnterPinScreen} from './Components/EnterPinScreen';
import {ContentScreen} from './Components/ContentScreen';
import {hasUserSetPinCode} from '@haskkor/react-native-pincode';
import {deleteUserPinCode} from '@haskkor/react-native-pincode';

const Stack = createStackNavigator();

export default App = () => {
  useEffect(() => {
    hasUserSetPinCode().then(setUserHasPincode);
    Promise.all([hasUserSetPinCode().then(setUserHasPincode)]).then(
      setAppInitialized(true),
    );
  }, []);

  const [isAppInitialized, setAppInitialized] = useState(false);
  const [userHasPincode, setUserHasPincode] = useState(false);
  if (isAppInitialized) {
    if (!userHasPincode) {
      return (
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={LoginForm}
              options={{
                title: 'Log in',
                headerStyle: {
                  backgroundColor: 'black',
                  borderBottomWidth: 2,
                  borderBottomColor: 'white',
                },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name="SetupPinScreen"
              options={{
                title: 'Set up your pin',
                headerStyle: {
                  backgroundColor: 'black',
                  borderBottomWidth: 2,
                  borderBottomColor: 'white',
                },
                headerTintColor: 'white',
              }}>
              {(props) => (
                <SetupPinScreen
                  {...props}
                  onSuccess={() => setUserHasPincode(true)}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="ContentScreen"
              component={ContentScreen}
              options={{
                title: 'Very valuable info',
                headerStyle: {
                  backgroundColor: 'black',
                  borderBottomWidth: 2,
                  borderBottomColor: 'white',
                },
                headerTintColor: 'white',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Stack.Navigator>
            <Stack.Screen
              name="EnterPin"
              component={EnterPinScreen}
              options={{
                title: 'Enter your pin',
                headerStyle: {
                  backgroundColor: 'black',
                  borderBottomWidth: 2,
                  borderBottomColor: 'white',
                },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name="ContentScreen"
              component={ContentScreen}
              options={{
                title: 'Very valuable info',
                headerStyle: {
                  backgroundColor: 'black',
                  borderBottomWidth: 2,
                  borderBottomColor: 'white',
                },
                headerTintColor: 'white',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        // <Button
        //   titleStyle={{color: 'white'}}
        //   buttonStyle={{marginTop: 200}}
        //   title="Delete pin"
        //   onPress={() => {
        //     deleteUserPinCode().then(() => setUserHasPincode(false));
        //     console.log('here');
        //   }}
        // />
      );
    }
  } else {
    return <Text>Loading...</Text>;
  }
};
