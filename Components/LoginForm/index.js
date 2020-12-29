import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {styles} from './LoginFormStyles';
import LuckyLoader from '../../misc/giphy.gif';

const placeholderData = {
  login: '1',
  password: '1',
};

export const LoginForm = ({navigation}, homeScreen = view) => {
  const [isLoading, setIsLoading] = useState(false);
  const [authFailed, setAuthFailed] = useState(false);
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const fakeApiCall = (navigation) => {
    return new Promise((resolve) => {
      setIsLoading(true);
      setTimeout(() => {
        resolve(navigation.navigate('SetupPinScreen'));
        setIsLoading(false);
      }, 5100);
    });
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Image source={LuckyLoader} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {authFailed ? (
        <>
          <Input
            placeholder="Enter your login:"
            placeholderTextColor="crimson"
            inputStyle={styles.inputFormOnError}
            name="login"
            onChangeText={(text) => {
              setLoginInput(text);
            }}
          />
          <Input
            secureTextEntry={true}
            placeholder="Enter your password:"
            onChangeText={(text) => {
              setPasswordInput(text);
            }}
            placeholderTextColor="crimson"
            inputStyle={styles.inputFormOnError}
            name="password"
          />
        </>
      ) : (
        <>
          <Input
            placeholder="Enter your login:"
            placeholderTextColor="white"
            inputStyle={styles.inputForm}
            name="login"
            onChangeText={(text) => {
              setLoginInput(text);
            }}
          />
          <Input
            secureTextEntry={true}
            placeholder="Enter your password:"
            onChangeText={(text) => {
              setPasswordInput(text);
            }}
            placeholderTextColor="white"
            inputStyle={styles.inputForm}
            name="password"
          />
        </>
      )}
      <Button
        titleStyle={{color: 'white'}}
        title="Log in"
        buttonStyle={styles.button}
        onPress={() => {
          if (
            loginInput === placeholderData.login &&
            passwordInput === placeholderData.password
          ) {
            setAuthFailed(false);
            fakeApiCall(navigation);
          } else {
            console.log(authFailed);
            setAuthFailed(true);
          }
        }}
      />
    </View>
  );
};
