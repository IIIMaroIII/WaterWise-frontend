import clsx from 'clsx';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './calendarItem.module.css';

export const CalendarItem = ({ day, amount }) => {
  const isFull = amount >= 100;
   const buildLinkClass = clsx(
    css.dayBtn,
    isFull ? css.fullColor : css.notfullColor
  );
  return (
    <>
      <Button className={buildLinkClass}>{day}</Button>
    </>
  );
};
export default CalendarItem;
