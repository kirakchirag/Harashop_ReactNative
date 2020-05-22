import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import API from '../api/harashop_api';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, loader: false, errorMessage: action.payload};

    case 'signup':
      return {errorMessage: '', loader: false, type: action.payload};
    case 'profile-update':
      return {errorMessage: '', type: action.payload};
    case 'signin':
      return {errorMessage: '', loader: false, type: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'signout':
      return {token: null, errorMessage: ''};
    case 'loading':
      return {...state, errorMessage: '', loader: true};

    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('user_data');
  if (token) {
    const user_data = JSON.parse(token);
    if (user_data[0].token) {
      dispatch({type: 'signin', payload: user_data[0]});
      navigate('ShopIndex');
    } else {
      navigate('Signup');
    }
  } else {
    navigate('Signup');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({type: 'clear_error_message'});
};

const signup = (dispatch) => async ({email, password}) => {
  try {
    dispatch({type: 'loading'});
    const response = await API.post('/signup', {email, password});
    const user_data = {token: response.data.token, user: response.data.user};
    new_user = [];
    new_user.push(user_data);
    await AsyncStorage.setItem('user_data', JSON.stringify(new_user));
    dispatch({type: 'signup', payload: response.data});
    navigate('ShopIndex');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Authentication Failed!! Check Your Email and Password!',
    });
  }
};

const signin = (dispatch) => {
  return async ({email, password}) => {
    try {
      dispatch({type: 'loading'});
      const response = await API.post('/signin', {email, password});
      const user_data = {token: response.data.token, user: response.data.user};
      new_user = [];
      new_user.push(user_data);

      await AsyncStorage.removeItem('user_data');
      await AsyncStorage.setItem('user_data', JSON.stringify(new_user));
      dispatch({type: 'signin', payload: response.data});
      navigate('ShopIndex');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Authentication Failed!! Check Your Email and Password!',
      });
    }
  };
};

const profileUpdate = (dispatch) => async ({
  street,
  state_r,
  city,
  house_no,
  toastWithDurationHandler,
}) => {
  try {
    const response = await API.patch('/users/me', {
      state_r,
      street,
      city,
      house_no,
    });

    const user_data = {token: response.data.token, user: response.data.user};
    new_user = [];
    new_user.push(user_data);

    await AsyncStorage.removeItem('user_data');
    await AsyncStorage.setItem('user_data', JSON.stringify(new_user));
    dispatch({type: 'profile-update', payload: response.data});
    toastWithDurationHandler('success');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Oops!! Something went Wrong with Sign Up!!',
    });
    toastWithDurationHandler('failure');
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('user_data');
  dispatch({type: 'signout'});
  navigate('loginFlow');
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, profileUpdate, signout, signup, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: '', loader: false},
);
