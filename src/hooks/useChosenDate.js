import { useDispatch, useSelector } from 'react-redux';

import {
  addMonths,
  formatISO,
  getDaysInMonth,
  getHours,
  getMinutes,
  getMonth,
  getYear,
  parseISO,
  subMonths,
} from 'date-fns';
import { selectDate } from 'src/redux/water/selectors.js';
import { setChosenDate } from 'src/redux/water/slice.js';

const useChosenDate = () => {
  const dispatch = useDispatch();
  const chosenDate = useSelector(selectDate);
  const parsedChosenDate = parseISO(chosenDate);

  const setNewChosenDate = newDate => {
    dispatch(setChosenDate(formatISO(newDate)));
  };

  const goToNextMonth = () => {
    if (parsedChosenDate) {
      const nextMonth = addMonths(new Date(parsedChosenDate), 1);
      setNewChosenDate(nextMonth);
    }
  };

  const goToPreviousMonth = () => {
    if (parsedChosenDate) {
      const prevMonth = subMonths(new Date(parsedChosenDate), 1);
      setNewChosenDate(prevMonth);
    }
  };

  const setChosenDay = newDay => {
    if (parsedChosenDate) {
      const updatedDate = new Date(parsedChosenDate);
      updatedDate.setDate(newDay);
      dispatch(setChosenDate(formatISO(updatedDate)));
    }
  };

  const getDaysOfMonth = () => {
    if (parsedChosenDate) {
      const year = getYear(parsedChosenDate);
      const month = getMonth(parsedChosenDate);
      const daysInMonth = getDaysInMonth(new Date(year, month));
      const daysArray = Array.from(
        { length: daysInMonth },
        (_, index) => index + 1,
      );
      return daysArray;
    }
    return [];
  };

  const getHoursAndMinutes = () => {
    if (parsedChosenDate) {
      const hours = getHours(parsedChosenDate);
      const minutes = getMinutes(parsedChosenDate);
      return `${hours}:${minutes}`;
    }
    return null;
  };

  const chosenYear = parsedChosenDate ? getYear(parsedChosenDate) : null;

  const chosenMonth = parsedChosenDate ? getMonth(parsedChosenDate) : null;

  return {
    chosenDate,
    getDaysOfMonth,
    setNewChosenDate,
    setChosenDay,
    goToPreviousMonth,
    goToNextMonth,
    chosenYear,
    chosenMonth,
    getHoursAndMinutes,
  };
};

export default useChosenDate;
