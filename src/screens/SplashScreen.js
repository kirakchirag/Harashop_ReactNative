import React, {Fragment, useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const splash = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
    navigation.navigate('switchNavigator');
  }, []);
  return (
    <Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
    </Fragment>
  );
};

export default splash;
