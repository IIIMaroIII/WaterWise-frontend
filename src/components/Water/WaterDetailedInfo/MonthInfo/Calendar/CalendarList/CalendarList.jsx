import CalendarItem from './CalendarItem/CalendarItem.jsx';
import css from './calendarList.module.css';
import useChosenDate from 'src/hooks/useChosenDate.js';

const CalendarList = () => {
  const { getDaysOfMonth } = useChosenDate();
  return (
    <ul className={css.list}>
      {getDaysOfMonth().map((day, index) => {
        return <CalendarItem key={index} day={day} />;
      })}
    </ul>
  );
};

export default CalendarList;
