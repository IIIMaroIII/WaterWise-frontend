export const selectWaterItems = state => state.water.water.dailyItems;
export const selectMonthlyWaterItems = state => state.water.water.monthlyItems;
export const selectIsLoading = state => state.water.isLoading;
export const selectIsError = state => state.water.error;
export const selectModalFlags = state => state.water.modalFlags;
