import { createAsyncThunk } from '@reduxjs/toolkit';
import CONSTANTS from 'src/components/Constants/constants.js';
import { Axios, AxiosWithCredentials, handleToken } from 'src/utils/axios.js';

export const signUp = createAsyncThunk(
  'users/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await Axios.post(
        `${CONSTANTS.USERS_ENDPOINTS.signUp}`,
        credentials,
      );
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signIn = createAsyncThunk(
  'users/signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await AxiosWithCredentials.post(
        `${CONSTANTS.USERS_ENDPOINTS.signIn}`,
        credentials,
      );
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      handleToken.set(res.data.data.accessToken);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await AxiosWithCredentials.post(
        `${CONSTANTS.USERS_ENDPOINTS.logout}`,
      );
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      // handleToken.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const refresh = createAsyncThunk(
  'users/refresh',
  async (_, { getState, rejectWithValue }) => {
    // const token = getState().users.user.token;
    // handleToken.set(token);
    try {
      const res = await AxiosWithCredentials.post(
        `${CONSTANTS.USERS_ENDPOINTS.refresh}`,
      );
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      handleToken.set(res.data.accessToken);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);
