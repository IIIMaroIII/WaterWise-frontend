import storage from 'redux-persist/lib/storage';

const users = {
  key: 'users',
  storage,
  whitelist: ['user', 'isLoggedIn'],
  blacklist: ['isLoggedIn'],
};
const water = {
  key: 'water',
  storage,
  whitelist: ['water'],
  // blacklist: ['totalDailyVolume', 'totalMonthlyVolume'],
};

export const persistConfig = {
  users,
  water,
};
