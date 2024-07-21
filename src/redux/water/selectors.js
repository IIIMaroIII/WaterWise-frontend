export const selectWaterItems = state => state.water.water.dailyItems;
export const selectTotalDailyVolume = state =>
  state.water.water.totalDailyVolume;
export const selectTotalMonthlyVolume = state =>
  state.water.water.totalMonthlyVolume;
export const selectMonthlyWaterItems = state => state.water.water.monthlyItems;
export const selectIsLoading = state => state.water.isLoading;
export const selectIsError = state => state.water.error;
export const selectModalFlags = state => state.water.modalFlags;

export const selectDate = state => state.water.chosenDate;

export const selectIsModalOpen = state => state.water.modalFlags.isModalOpen;
export const selectIsDeleteWaterModalOpen = state =>
  state.water.modalFlags.isDeleteWaterModalOpen;
export const selectIsLogoutModalOpen = state =>
  state.water.modalFlags.isLogoutModalOpen;
export const selectIsUsersSettingsModalOpen = state =>
  state.water.modalFlags.isUsersSettingsModalOpen;
export const selectIsWaterModalEdit = state =>
  state.water.modalFlags.isWaterModalEdit;
export const selectIsWaterModalAdd = state =>
  state.water.modalFlags.isWaterModalAdd;
