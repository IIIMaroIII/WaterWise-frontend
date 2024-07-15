import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { initialState } from './initialState';
import {
  addWater,
  changeWater,
  deleteWater,
  fetchDailyWater,
  fetchMonthlyWater,
} from './operations.js';

const handleRejected = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};
export const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    openModal: state => {
      state.modalFlags.isModalOpen = true;
    },
    closeModal: state => {
      state.modalFlags.isModalOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDailyWater.pending, handlePending)
      .addCase(addWater.pending, handlePending)
      .addCase(deleteWater.pending, handlePending)
      .addCase(changeWater.pending, handlePending)
      .addCase(fetchMonthlyWater.pending, handlePending)

      .addCase(fetchDailyWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        toast('You add a water record', {
          style: {
            borderRadius: '10px',
            background: 'rgb(144, 26, 228)',
            color: '#fff',
          },
        });
      })
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
        toast(`You deleted a water record!`, {
          style: {
            borderRadius: '10px',
            background: 'rgb(144, 26, 228)',
            color: '#fff',
          },
        });
      })

      // .addCase(changeWater.fulfilled, (state, action) => {
      //   state.isLoading = false;
      // const index = state.items.findIndex(contact => contact.id === action.payload.id);
      // if (index !== -1) {
      //   state.items[index] = action.payload;
      // }
      // })

      .addCase(fetchMonthlyWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.monthlyItems = action.payload;
      })

      .addCase(changeWater.rejected, handleRejected)
      .addCase(fetchDailyWater.rejected, handleRejected)
      .addCase(addWater.rejected, handleRejected)
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(fetchMonthlyWater.rejected, handleRejected);
  },
});

export const waterReducer = waterSlice.reducer;
export const { openModal, closeModal } = waterSlice.actions;
