import React, {useEffect} from 'react';
import {View} from 'react-native';
import PINCode from '@haskkor/react-native-pincode';
import TouchID from 'react-native-touch-id';
import {styles} from '../LoginForm/LoginFormStyles';

export const SetupPinScreen = ({navigation, route, onSuccess}) => {
  return (
    <View style={styles.container}>
      <PINCode
        titleChoose="Enter a PIN code"
        subtitleChoose=" "
        titleConfirm="Confirm your PIN code"
        stylePinCodeColorSubtitle="white"
        stylePinCodeColorTitle="white"
        colorCircleButtons="black"
        colorPassword="white"
        numbersButtonOverlayColor="white"
        stylePinCodeButtonNumber="white"
        status={'choose'}
        finishProcess={() => {
          TouchID.authenticate('to demo this react-native component')
            .then((success) => {
              navigation.navigate('ContentScreen');
              onSuccess();
            })
            .catch((error) => {
              console.log(error);
              onSuccess();
            });
        }}
      />
    </View>
  );
};
