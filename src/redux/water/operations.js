import { createAsyncThunk } from '@reduxjs/toolkit';
import { formatISO, parseISO } from 'date-fns';
import CONSTANTS from 'src/components/Constants/constants.js';
import { AxiosWithCredentials } from 'src/utils/axios.js';

export const fetchDailyWater = createAsyncThunk(
  'water/fetchDaily',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { chosenDate } = getState().water;
      const url = `${CONSTANTS.WATER_ENDPOINTS.daily}?chosenDate=${encodeURIComponent(chosenDate)}`;
      const response = await AxiosWithCredentials.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async ({ waterValue, time }, { rejectWithValue }) => {
    try {
      const response = await AxiosWithCredentials.post(
        `${CONSTANTS.WATER_ENDPOINTS.water}`,
        { waterValue, time },
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
  async (id, { rejectWithValue }) => {
    try {
      const response = await AxiosWithCredentials.delete(
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
  async ({ id, updateVolume }, { rejectWithValue }) => {
    try {
      const response = await AxiosWithCredentials.patch(
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
    try {
      const { chosenDate } = getState().water;
      const url = `${CONSTANTS.WATER_ENDPOINTS.monthly}?chosenDate=${encodeURIComponent(chosenDate)}`;
      const response = await AxiosWithCredentials.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
