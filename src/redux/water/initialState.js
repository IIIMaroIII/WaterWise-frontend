export const initialState = {
  water: {
    dailyNorma: 2,
    dailyItems: [],
    monthlyItems: [],
  },
  modalFlags: {
    isModalOpen: false,
    isWaterOpen: false,
    isDeleteWaterModalOpen: false,
    isUsersSettingsModalOpen: false,
    isLogoutModalOpen: false,
  },
  currentDate: null,
  chosenDate: null,
  isLoading: false,
  error: null,
};
