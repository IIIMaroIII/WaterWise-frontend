import * as yup from 'yup';
import CONSTANTS from '../../components/Constants/constants.js';

const { MAX_CHAR_VALIDATION, MIN_CHAR_VALIDATION, MAX_CHAR_WATER_VALIDATION } =
  CONSTANTS.MODALS.SETTINGS_USER_MODAL;

const userSettingsFormValidation = yup.object().shape({
  avatar: yup.mixed(),
  gender: yup.string().required('Gender is required'),
  name: yup
    .string()
    .min(
      MIN_CHAR_VALIDATION,
      `Your name must be more than ${MIN_CHAR_VALIDATION} characters!`,
    )
    .max(
      MAX_CHAR_VALIDATION,
      `Your name must be less than ${MAX_CHAR_VALIDATION} characters!`,
    ),
  email: yup
    .string()
    .email('You must enter valid email address!')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please fill a valid email address in lowercase. Examples of valid email addresses: john.doe@example.com, john-doe@example.com, john@example.co.uk, john.doe@example.co.in',
    ),
  weight: yup
    .number()
    .positive('Weight must be a positive number')
    .required('Your weight is required for counting water daily norma'),
  activeTime: yup.number().positive('Active time must be a positive number'),
  waterIntake: yup
    .number()
    .positive('Water intake must be a positive number')
    .max(
      MAX_CHAR_WATER_VALIDATION,
      `Emount of water intake must not be a greater than ${MAX_CHAR_WATER_VALIDATION} number!`,
    ),
});
export default userSettingsFormValidation;
