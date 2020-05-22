import {useEffect, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const {tryLocalSignin} = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};
ResolveAuthScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
export default ResolveAuthScreen;
