import { selectUserToken } from 'src/redux/users/selectors.js';
import axios from 'axios';
import CONSTANTS from 'src/components/Constants/constants.js';
import store from 'src/redux/store.js';
import toast from 'react-hot-toast';

export const Axios = axios.create({
  baseURL: CONSTANTS.AXIOS.baseURL,
});

export const AxiosWithCredentials = axios.create({
  baseURL: CONSTANTS.AXIOS.baseURL,
  withCredentials: true,
});

AxiosWithCredentials.interceptors.request.use(
  config => {
    const state = store.getState();
    const token = selectUserToken(state);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    toast.error(error.message);
    return Promise.reject(error);
  },
);

// export const handleToken = {
//   set(token) {
//     Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     AxiosWithCredentials.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     Axios.defaults.headers.common.Authorization = '';
//     AxiosWithCredentials.defaults.headers.common.Authorization = '';
//   },
// };
