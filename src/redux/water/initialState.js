import { formatISO } from 'date-fns';

export const initialState = {
  water: {
    dailyItems: [],
    totalDailyVolume: 0,
    totalMonthlyVolume: 0,
    monthlyItems: [],
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
  chosenDate: formatISO(new Date()),
  isLoading: false,
  error: null,
};
