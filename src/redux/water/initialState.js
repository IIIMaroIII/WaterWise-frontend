export const initialState = {
  water: {
    dailyNorma: 2,
    items: [],
    monthlyItems: [],
  },
  modalFlags: {
    isModalOpen: false,
    isWaterOpen: false,
    isDeleteWaterModalOpen: false,
    isUsersSettingsModalOpen: false,
    isLogoutModalOpen: false,
  },
  chosenDate: null,
  isLoading: false,
  error: null,
};
