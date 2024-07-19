export const initialState = {
  water: {
    dailyItems: [],
    monthlyItems:[],
  },
  modalFlags: {
    isModalOpen: false,
    isWaterOpen: false,
    isDeleteWaterModalOpen: false,
    isUsersSettingsModalOpen: false,
    isLogoutModalOpen: false,
    isWaterModalEdit: false,
    isWaterModalAdd: false,
  },
  chosenDate: null,
  isLoading: false,
  error: null,
};
