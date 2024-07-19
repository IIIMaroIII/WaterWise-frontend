import { Calendar } from './Calendar/Calendar';
import { CalendarPagination } from './CalendarPagination/CalendarPagination';
// import sprite from '../../../shared/icons/index';

import css from './MonthInfo.module.css';

export const MonthInfo = () => {
  return (
    <>
      <div className={css.wrapper}>
        <h3 className={css.month}>Month</h3>
        <CalendarPagination />
      </div>
      <Calendar />
    </>
  );
};
export default MonthInfo;
