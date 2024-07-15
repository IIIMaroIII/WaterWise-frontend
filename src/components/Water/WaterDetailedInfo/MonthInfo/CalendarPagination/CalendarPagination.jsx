// import { useState, useEffect } from 'react';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../../../../../components/REUSABLE/Button/Button';
// import { sprite } from '../../../shared/icons/index';

import css from './calendarPagination.module.css';
// import { Calendar } from '../Calendar/Calendar';

export const CalendarPagination = ({ selectedDate, setSelectedDate }) => {
  const goToPrevoiusMonth = () => {
    const prevoiusMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );
    setSelectedDate(prevoiusMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);
    // updateNumberOfDays(nextMonth);
  };

  // const updateNumberOfDays = date => {
  //   const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  //   const daysInMonth = lastDayOfMonth.getDate();
  //   setNumberOfDaysInMonth(daysInMonth);
  // };

  // useEffect(() => {
  //   updateNumberOfDays(selectedDate);
  // }, [selectedDate]);

  const formattedDate = selectedDate
    .toLocaleString('en-GB', {
      month: 'long',
      year: 'numeric',
    })
    .replace(/(\w+) (\d+)/, '$1, $2');

  return (
    <div className={css.wrapper}>
      <Button onClick={goToPrevoiusMonth} className={css.btn}>
       <BsChevronLeft size="12" className={css.arrow} />
      </Button>
      <span className={css.span}>{formattedDate}</span>
      <Button onClick={goToNextMonth} className={css.btn}>
        <BsChevronRight size="12" className={css.arrow} />
      </Button>
       {/* <svg width="20" height="20" className={css.pieIcon}>
        <use xlinkHref={`${sprite}#pie_chart`}></use>
      </svg> */}
    </div>
  );
};
export default CalendarPagination;