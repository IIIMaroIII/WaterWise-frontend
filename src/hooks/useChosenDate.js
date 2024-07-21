// import { useDispatch, useSelector } from 'react-redux';

// import {
//   addMonths,
//   getDaysInMonth,
//   getMonth,
//   getYear,
//   parseISO,
//   subMonths,
// } from 'date-fns';
// import { selectDate } from 'src/redux/water/selectors.js';
// import { setChosenDate } from 'src/redux/water/slice.js';

// const useChosenDate = () => {
//   const dispatch = useDispatch();
//   const chosenDate = useSelector(selectDate);

//   const getUtcDate = (date = chosenDate) => {
//     const utcDate = new Date(
//       Date.UTC(
//         date.getUTCFullYear(),
//         date.getUTCMonth(),
//         date.getUTCDate(),
//         date.getUTCHours(),
//         date.getUTCMinutes(),
//         date.getUTCSeconds(),
//         date.getUTCMilliseconds(),
//       ),
//     );

//     return utcDate.toISOString();
//   };

//   const parsedChosenDate = chosenDate ? parseISO(chosenDate) : new Date();

//   const setNewChosenDate = newDate => {
//     const utcFormattedDate = getUtcDate(newDate);
//     dispatch(setChosenDate(utcFormattedDate));
//   };

//   const goToNextMonth = () => {
//     if (parsedChosenDate) {
//       const nextMonth = addMonths(new Date(parsedChosenDate), 1);
//       setNewChosenDate(nextMonth);
//     }
//   };

//   const goToPreviousMonth = () => {
//     if (parsedChosenDate) {
//       const prevMonth = subMonths(new Date(parsedChosenDate), 1);
//       setNewChosenDate(prevMonth);
//     }
//   };

//   const setChosenDay = (newDay = 1) => {
//     if (chosenDate) {
//       const updatedDate = new Date(chosenDate);
//       updatedDate.setDate(newDay);
//       console.log('updatedDate', updatedDate);
//       const utcFormattedDate = getUtcDate(updatedDate);
//       console.log('utcFormattedDate', utcFormattedDate);
//       dispatch(setChosenDate(utcFormattedDate));
//     }
//   };

//   const getDaysOfMonth = () => {
//     if (parsedChosenDate) {
//       const year = getYear(parsedChosenDate);
//       const month = getMonth(parsedChosenDate);
//       const daysInMonth = getDaysInMonth(new Date(year, month));
//       const daysArray = Array.from(
//         { length: daysInMonth },
//         (_, index) => index + 1,
//       );
//       return daysArray;
//     }
//     return [];
//   };

//   const chosenYear = parsedChosenDate ? getYear(parsedChosenDate) : null;

//   const chosenMonth = parsedChosenDate ? getMonth(parsedChosenDate) : null;

//   return {
//     parsedChosenDate,
//     chosenDate,
//     getDaysOfMonth,
//     setNewChosenDate,
//     setChosenDay,
//     goToPreviousMonth,
//     goToNextMonth,
//     chosenYear,
//     chosenMonth,
//     getUtcDate,
//   };
// };

// export default useChosenDate;

/* NEW local time    */

import { useDispatch, useSelector } from 'react-redux';

import { getDaysInMonth } from 'date-fns';
import { selectDate } from 'src/redux/water/selectors.js';
import { setChosenDate } from 'src/redux/water/slice.js';

const useChosenDate = () => {
  const dispatch = useDispatch();
  const chosenDate = useSelector(selectDate);

  const changeMonth = (date, months) => {
    const resultDate = new Date(date);
    resultDate.setMonth(resultDate.getMonth() + months);
    return resultDate;
  };

  // const setNewChosenDate = newDate => {
  //   dispatch(setChosenDate(formatISO(newDate)));
  // };

  const setNewChosenDate = newDate => {
    dispatch(setChosenDate(formatLocalISO(newDate)));
  };

  const goToNextMonth = () => {
    if (chosenDate) {
      const nextMonth = changeMonth(chosenDate, 1);
      setNewChosenDate(nextMonth);
    }
  };

  const goToPreviousMonth = () => {
    if (chosenDate) {
      const prevMonth = changeMonth(chosenDate, -1);
      setNewChosenDate(prevMonth);
    }
  };

  const setChosenDay = newDay => {
    if (chosenDate) {
      const updatedDate = new Date(chosenDate);
      updatedDate.setDate(newDay);
      dispatch(setChosenDate(formatLocalISO(updatedDate)));
    }
  };

  // const setChosenDay = newDay => {
  //   if (chosenDate) {
  //     const updatedDate = new Date(chosenDate);
  //     updatedDate.setDate(newDay);
  //     dispatch(setChosenDate(formatISO(updatedDate)));
  //   }
  // };

  const getDaysOfMonth = () => {
    if (chosenDate) {
      const date = new Date(chosenDate);
      const year = date.getFullYear();
      const month = date.getMonth();
      const daysInMonth = getDaysInMonth(new Date(year, month));
      return Array.from({ length: daysInMonth }, (_, index) => index + 1);
    }
    return [];
  };

  const formatLocalISO = date => {
    const tzOffset = -date.getTimezoneOffset();
    const diff = tzOffset >= 0 ? '+' : '-';
    const pad = num => (num < 10 ? '0' : '') + num;

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    const second = pad(date.getSeconds());
    const timezone = `${diff}${pad(Math.floor(Math.abs(tzOffset) / 60))}:${pad(
      Math.abs(tzOffset) % 60,
    )}`;

    return `${year}-${month}-${day}T${hour}:${minute}:${second}${timezone}`;
  };

  return {
    chosenDate,
    getDaysOfMonth,
    setNewChosenDate,
    setChosenDay,
    goToPreviousMonth,
    goToNextMonth,
    formatLocalISO,
    chosenYear: chosenDate ? new Date(chosenDate).getFullYear() : null,
    chosenMonth: chosenDate ? new Date(chosenDate).getMonth() : null,
  };
};

export default useChosenDate;
