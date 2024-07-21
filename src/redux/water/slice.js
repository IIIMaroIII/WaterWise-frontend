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
  initialState: initialState,
  reducers: {
    changeModal(state, action) {
      state.modalFlags.isModalOpen = action.payload;
    },
    setChosenDate(state, { payload }) {
      state.chosenDate = payload;
    },
    changeWaterModalEdit(state, action) {
      state.modalFlags.isWaterModalEdit = action.payload;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalAdd = false;
    },
    changeWaterModalAdd(state, action) {
      state.modalFlags.isWaterModalAdd = action.payload;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
    changeDeleteWaterModalOpen(state, action) {
      state.modalFlags.isDeleteWaterModalOpen = action.payload;
      state.modalFlags.isWaterModalAdd = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
    changeUsersSettingsModalOpen(state, action) {
      state.modalFlags.isUsersSettingsModalOpen = action.payload;
      state.modalFlags.isWaterModalAdd = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
    changeLogoutModalOpen(state, action) {
      state.modalFlags.isLogoutModalOpen = action.payload;
      state.modalFlags.isWaterModalAdd = false;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
    totalDailyVolumes(state, { payload }) {
      state.water.totalDailyVolume = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDailyWater.pending, handlePending)
      .addCase(addWater.pending, handlePending)
      .addCase(deleteWater.pending, handlePending)
      .addCase(changeWater.pending, handlePending)
      .addCase(fetchMonthlyWater.pending, handlePending)
      .addCase(fetchDailyWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.water.dailyItems = payload;
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.water.dailyItems.push(action.payload);
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
        state.water.dailyItems = state.water.dailyItems.filter(
          item => item.id !== action.payload.id,
        );
      })
      .addCase(fetchMonthlyWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.water.monthlyItems = payload;
      })
      .addCase(changeWater.rejected, handleRejected)
      .addCase(fetchDailyWater.rejected, handleRejected)
      .addCase(addWater.rejected, handleRejected)
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(fetchMonthlyWater.rejected, handleRejected);
  },
});
export const {
  changeModal,
  setChosenDate,
  changeWaterModalEdit,
  changeWaterModalAdd,
  changeDeleteWaterModalOpen,
  changeUsersSettingsModalOpen,
  changeLogoutModalOpen,
  totalDailyVolumes,
} = waterSlice.actions;

export const waterReducer = waterSlice.reducer;
