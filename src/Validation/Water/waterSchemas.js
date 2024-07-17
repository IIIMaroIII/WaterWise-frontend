import * as yup from 'yup';
import CONSTANTS from 'src/components/Constants/constants.js';
const waterTemplateSchema = yup.object().shape({
  time: yup.string().required(),
  waterValue: yup
    .number()
    .positive()
    .integer()
    .required()
    .min(
      CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT,
      `Water amount must be at least ${CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT} mililiters`,
    )
    .max(
      CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT,
      `Water amount must be no more than ${
        CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT / 1000
      } liters`,
    ),
});

const waterSchemas = {
  waterTemplateSchema,
};

export default waterSchemas;
