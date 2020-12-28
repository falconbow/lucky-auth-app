import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {styles} from '../LoginForm/LoginFormStyles';
import PINCode from '@haskkor/react-native-pincode';
import LuckyLoader from '../../misc/giphy.gif';

export const EnterPinScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const fakeApiCall = (navigation) => {
    return new Promise((resolve) => {
      setIsLoading(true);
      setTimeout(() => {
        resolve(navigation.navigate('ContentScreen'));
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
  } else {
    return (
      <View style={styles.container}>
        <PINCode
          stylePinCodeColorSubtitle="white"
          stylePinCodeColorTitle="white"
          colorCircleButtons="black"
          colorPassword="white"
          numbersButtonOverlayColor="white"
          stylePinCodeButtonNumber="white"
          status={'enter'}
          finishProcess={() => {
            fakeApiCall(navigation);
          }}
        />
      </View>
    );
  }
};
