import { createAsyncThunk } from '@reduxjs/toolkit';
import CONSTANTS from 'src/components/Constants/constants.js';
import { AxiosWithCredentials } from 'src/utils/axios.js';

export const signUp = createAsyncThunk(
  'users/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await AxiosWithCredentials.post(
        `${CONSTANTS.USERS_ENDPOINTS.signUp}`,
        credentials,
      );
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        statusCode: error.response?.status,
        data: error.response?.data,
      });
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
        return rejectWithValue(res.message);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        statusCode: error.response?.status,
        data: error.response?.data,
      });
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
      console.log(res);
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue({
        message: error.message,
        statusCode: error.response?.status,
        data: error.response?.data,
      });
    }
  },
);

export const refresh = createAsyncThunk(
  'users/refresh',
  async (_, { rejectWithValue }) => {
    try {
      const res = await AxiosWithCredentials.post(
        `${CONSTANTS.USERS_ENDPOINTS.refresh}`,
      );
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue({
        message: error.message,
        statusCode: error.response?.status,
        data: error.response?.data,
      });
    }
  },
);
