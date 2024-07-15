import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import CONSTANTS from 'src/components/Constants/constants';
import { handleToken } from 'src/utils/handleToken';

export const signUp = createAsyncThunk(
  'users/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${CONSTANTS.USERS_ENDPOINTS.signUp}`,
        credentials,
      );
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      handleToken.set(res.data.token);
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
      const res = await axios.post(
        `${CONSTANTS.USERS_ENDPOINTS.signIn}`,
        credentials,
      );
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      handleToken.set(res.data.token);

      toast.success(
        `Welcome back ${res.data.user.name} 👋🏻 Nice to see you again 😉`,
      );
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
      const res = await axios.post(`${CONSTANTS.USERS_ENDPOINTS.logout}`);
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      handleToken.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const refresh = createAsyncThunk(
  'users/refresh',
  async (_, { getState, rejectWithValue }) => {
    const currentToken = getState().users.token;
    handleToken.set(currentToken);
    try {
      const res = await axios.get(`${CONSTANTS.USERS_ENDPOINTS.refresh}`);
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
