import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_URL_DEV } from '@env';

const api = axios.create({
  baseURL: `${API_URL_DEV}`,
});

async function addAuthenticationTokenToHeader(config) {
  config.headers = {
    'Content-Type': 'application/json',
    accept: 'application/json',
    Authorization: `Bearer ${await AsyncStorage.getItem('@NextiApp:token')}`,
  };

  return config;
}

api.interceptors.request.use(addAuthenticationTokenToHeader, error => {
  Promise.reject(error);
});

export default api;
