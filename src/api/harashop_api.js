import axios from 'axios';
import {AsyncStorage} from 'react-native';
import config from 'config';

const instance = axios.create({
  baseURL: config.get('baseURI'),
});

instance.interceptors.request.use(
  async (config) => {
    var user_data = null;
    var token = null;
    const data = await AsyncStorage.getItem('user_data');
    if (data) {
      user_data = JSON.parse(data);
      token = user_data[0].token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
