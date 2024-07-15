import Button from '../../../../../../REUSABLE/Button/Button';
import css from './calendarItem.module.css';

export const CalendarItem = ({ day }) => {
  return (
    <>
      <Button>{day}</Button>
    </>
  );
};
export default CalendarItem;
