export const selectWaterItems = state => state.water.items;
export const selectMonthlyWaterItems = state => state.water.monthlyItems;
export const selectIsLoading = state => state.water.isLoading;
export const selectIsError = state => state.water.isError;

export const modalOpen = state => state.water.modalFlags.isModalOpen;
// export const logoutModalOpen = state => state.water.isLogoutModalOpen;
// export const deleteModalOpen = state => state.water.isDeleteWaterModalOpen;
// export const userSettingsModalOpen = state => state.water.isUsersSettingsModalOpen;
