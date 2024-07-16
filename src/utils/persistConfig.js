import storage from 'redux-persist/lib/storage';

const users = {
  key: 'users',
  storage,
  whitelist: ['user'],
  //   blacklist: ["contacts", "isError", "isLoading", "productData"],
};
// const email = {
//   key: 'email',
//   storage,
//   whitelist: ['email'],
//   //   blacklist: ["contacts", "isError", "isLoading", "productData"],
// };

export const persistConfig = {
  users,
};
