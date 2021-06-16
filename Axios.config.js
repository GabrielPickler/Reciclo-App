import axios from 'axios';
import { API_URL_DEV } from '@env';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    // eslint-disable-next-line prettier/prettier
    accept: 'application/json',
  },
  baseURL: `${API_URL_DEV}`,
});

export default api;
