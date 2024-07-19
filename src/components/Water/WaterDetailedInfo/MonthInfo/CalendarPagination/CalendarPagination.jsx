import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../../../../../components/REUSABLE/Button/Button';
import { parseISO } from 'date-fns';
import useChosenDate from 'src/hooks/useChosenDate.js';
import monthAsName from 'src/utils/monthAsName.js';
import css from './calendarPagination.module.css';
import { fetchMonthlyWater } from 'src/redux/water/operations';
import { useDispatch } from 'react-redux';


export const CalendarPagination = () => {
  const { chosenDate, goToPreviousMonth, goToNextMonth, chosenYear } =
    useChosenDate();
  const { month } = monthAsName(parseISO(chosenDate));
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <Button onClick={() => {
            goToPreviousMonth();
            dispatch(fetchMonthlyWater())
          }} addClass={css.btn}>
        <BsChevronLeft size="12" className={css.arrow} />
      </Button>
      <span className={css.span}>{`${month}, ${chosenYear}`}</span>
      <Button onClick={() => {
            goToNextMonth();
            dispatch(fetchMonthlyWater())
          }} addClass={css.btn}>
        <BsChevronRight size="12" className={css.arrow} />
      </Button>
    </div>
  );
};
export default CalendarPagination;
