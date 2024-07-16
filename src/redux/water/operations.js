import { createAsyncThunk } from '@reduxjs/toolkit';
import CONSTANTS from 'src/components/Constants/constants.js';
import { Axios, handleToken } from 'src/utils/axios.js';

export const fetchDailyWater = createAsyncThunk(
  'water/fetchDaily',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().users.user.token;
    handleToken.set(token);
    try {
      const response = await Axios.get(`${CONSTANTS.WATER_ENDPOINTS.daily}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (volume, { getState, rejectWithValue }) => {
    const token = getState().users.user.token;
    handleToken.set(token);
    try {
      const response = await Axios.post(
        `${CONSTANTS.WATER_ENDPOINTS.water}`,
        volume,
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, { getState, rejectWithValue }) => {
    const token = getState().users.user.token;
    handleToken.set(token);
    try {
      const response = await Axios.delete(
        `${CONSTANTS.WATER_ENDPOINTS.water}/${id}`,
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const changeWater = createAsyncThunk(
  'water/changeWater',
  async ({ id, updateVolume }, { getState, rejectWithValue }) => {
    const token = getState().users.user.token;
    handleToken.set(token);
    try {
      const response = await Axios.patch(
        `${CONSTANTS.WATER_ENDPOINTS.water}/${id}`,
        updateVolume,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchMonthlyWater = createAsyncThunk(
  'water/fetchMonthly',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().users.user.token;
    handleToken.set(token);
    try {
      const response = await Axios.get(`${CONSTANTS.WATER_ENDPOINTS.monthly}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
