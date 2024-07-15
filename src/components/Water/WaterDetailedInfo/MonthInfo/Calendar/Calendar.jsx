import { useState } from 'react';
import { CalendarItem } from './CalendarList/CalendarItem/CalendarItem';
import css from './calendar.module.css';
import { daysInMonth } from 'src/utils/daysInMonth.js';

export const Calendar = ({ selectedDate }) => {
  const [chosenDate, setChosenDate] = useState(null);

  const daysArray = Array.from(
    { length: daysInMonth(selectedDate) },
    (_, index) => index + 1,
  );
  const getCurrentDate = day => {
    const currentDate = new Date();
    currentDate.setDate(day);
    currentDate.setMonth(selectedDate.getMonth());
    currentDate.setFullYear(selectedDate.getFullYear());
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString(
      'default',
      { month: 'long' },
    )} ${currentDate.getFullYear()}`;

    setChosenDate(formattedDate);
    console.log(currentDate);
    console.log('current day', currentDate.getDate());
    console.log('current month', currentDate.getMonth() + 1);
    console.log('current year', currentDate.getFullYear());
  };
  return (
    <>
      <ul className={css.list}>
        {daysArray.map(day => (
          <li
            onClick={() => getCurrentDate(day)}
            key={day}
            className={css.item}
          >
            <CalendarItem day={day} />
          </li>
        ))}
      </ul>
      {!chosenDate ? null : (
        <b>Chosen date: {chosenDate} `для полного лога открыть консоль` </b>
      )}
    </>
  );
};
export default Calendar;
