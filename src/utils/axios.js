import { selectUserToken } from 'src/redux/users/selectors.js';
import axios from 'axios';
import CONSTANTS from 'src/components/Constants/constants.js';
import store from 'src/redux/store.js';
import toast from 'react-hot-toast';
import { refresh } from 'src/redux/users/operations.js';

const AxiosWithCredentials = axios.create({
  baseURL: CONSTANTS.DOMAINS.SERVER_DEPLOY,
  withCredentials: true,
});

/*AxiosWithCredentials.interceptors.request.use(
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
Рабочий вариант был
*/

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

AxiosWithCredentials.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.data.status === 401 && !originalRequest._retry) {
      toast.error('Your access token has been expired!');
      originalRequest._retry = true;
      try {
        const result = await store.dispatch(refresh()).unwrap();
        // toast.success(
        //   'Your expired access token has been successfully refreshed!',
        // );
        originalRequest.headers[
          'Authorization'
        ] = `Bearer ${result.data.accessToken}`; // ПРОВЕРИТЬ result! должна быть data, но пока работает
        return AxiosWithCredentials(originalRequest);
      } catch (err) {
        toast(
          'You have been redirected to Sign In page due to network error or empty cookies',
        );
        console.error('Failed to refresh token', err);
        window.location.href = '/signin';
      }
    } else {
      const result = await store.dispatch(refresh()).unwrap();
      // toast.success(
      //   'Your expired access token has been successfully refreshed!',
      // );
      originalRequest.headers[
        'Authorization'
      ] = `Bearer ${result.data.accessToken}`; // ПРОВЕРИТЬ result! должна быть data, но пока работает
      return AxiosWithCredentials(originalRequest);
    }

    toast.error(error.response?.data.message);
    return Promise.reject(error);
  },
);
/**    Доработать 400, 500      */
// AxiosWithCredentials.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;

//     if (error.data.response.status === 401 && !originalRequest._retry) {
//       toast.error('Your access token has been expired!');
//       originalRequest._retry = true;
//       try {
//         const result = await store.dispatch(refresh()).unwrap();
//         toast.success(
//           'Your expired access token has been successfully refreshed!',
//         );
//         originalRequest.headers[
//           'Authorization'
//         ] = `Bearer ${result.data.accessToken}`;
//         return AxiosWithCredentials(originalRequest);
//       } catch (err) {
//         toast(
//           'You have been redirected to Sign In page due to network error or empty cookies',
//         );
//         console.error('Failed to refresh token', err);
//         window.location.href = '/signin';
//         return Promise.reject(err);
//       }
//     }

//     if (error.response.data.status === 400) {
//       toast.error('Bad Request: ' + error.response.data.message);
//     } else if (error.response.data.status === 500) {
//       toast.error('Internal Server Error: ' + error.response.data.message);
//     } else {
//       toast.error(error.response?.data.message || 'An error occurred');
//     }

//     return Promise.reject(error);
//   },
// );

export default AxiosWithCredentials;
