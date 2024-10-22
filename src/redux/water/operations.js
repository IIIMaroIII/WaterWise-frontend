import { createAsyncThunk } from '@reduxjs/toolkit';
import CONSTANTS from 'src/components/Constants/constants.js';
import AxiosWithCredentials from 'src/utils/axios.js';

export const addWater = createAsyncThunk(
  'water/addWater',
  async (formData, { getState, rejectWithValue }) => {
    try {
      const chosenDate = getState().water.chosenDate;
      formData.append('date', chosenDate);

      await AxiosWithCredentials.post(
        `${CONSTANTS.WATER_ENDPOINTS.water}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (_, { getState, rejectWithValue }) => {
    const id = getState().water.chosenWaterCardId;
    console.log(id);
    try {
      await AxiosWithCredentials.delete(
        `${CONSTANTS.WATER_ENDPOINTS.water}/${id}`,
      );

      const items = getState().water.water.dailyItems.filter(
        item => item._id !== id,
      );
      return items;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export const changeWater = createAsyncThunk(
  'water/changeWater',
  async (formData, { getState, rejectWithValue }) => {
    try {
      const chosenDate = getState().water.chosenDate;
      const chosenCardId = getState().water.chosenWaterCardId;

      formData.append('date', chosenDate);
      formData.append('chosenCardId', chosenCardId);

      await AxiosWithCredentials.patch(
        `${CONSTANTS.WATER_ENDPOINTS.water}/${chosenCardId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export const fetchDailyWater = createAsyncThunk(
  'water/fetchDaily',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { chosenDate } = getState().water;
      const url = `${
        CONSTANTS.WATER_ENDPOINTS.daily
      }?chosenDate=${encodeURIComponent(chosenDate)}`;
      const response = await AxiosWithCredentials.get(url);

      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export const fetchMonthlyWater = createAsyncThunk(
  'water/fetchMonthly',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { chosenDate } = getState().water;
      const url = `${
        CONSTANTS.WATER_ENDPOINTS.monthly
      }?chosenDate=${encodeURIComponent(chosenDate)}`;
      const response = await AxiosWithCredentials.get(url);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);
