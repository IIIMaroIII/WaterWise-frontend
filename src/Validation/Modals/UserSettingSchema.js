import CONSTANTS from 'src/components/Constants/constants.js';
import * as yup from 'yup';

const userSettingSchema = yup.object().shape({
  avatar: yup.mixed().required('Avatar is required'),
  gender: yup.string().required('Gender is required'),
  name: yup
    .string()
    .min(
      CONSTANTS.USER_SETTING_CHAR_VALIDATION.MIN_CHAR_VALIDATION,
      `Your name must be more than ${CONSTANTS.USER_SETTING_CHAR_VALIDATION.MIN_CHAR_VALIDATION} characters!`,
    )
    .max(
      CONSTANTS.USER_SETTING_CHAR_VALIDATION.MAX_CHAR_VALIDATION,
      `Your name must be less than ${CONSTANTS.USER_SETTING_CHAR_VALIDATION.MAX_CHAR_VALIDATION} characters!`,
    )
    .required('Name is required'),
  email: yup
    .string()
    .email('You must enter valid email address!')
    .required('Email is required'),
  weight: yup.number().positive('Weight must be a positive number'),
  activeTime: yup.number().positive('Active time must be a positive number'),

  waterIntake: yup
    .number()
    .positive('Water intake must be a positive number')

    .max(
      CONSTANTS.USER_SETTING_CHAR_VALIDATION.MAX_CHAR_WATER_VALIDATION,
      `Emount of water intake must not be a greater than ${CONSTANTS.USER_SETTING_CHAR_VALIDATION.MAX_CHAR_WATER_VALIDATION} number!`,
    )
    .required('Water intake is required'),
});
export default userSettingSchema;
