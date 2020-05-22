import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';

import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Hara Shop"
        errorMessage={state.errorMessage}
        loader={state.loader}
        icon_name="shopping-cart"
        submitButtonText="Sign Up"
        onSubmit={({email, password}) => signup({email, password})}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default SignupScreen;
