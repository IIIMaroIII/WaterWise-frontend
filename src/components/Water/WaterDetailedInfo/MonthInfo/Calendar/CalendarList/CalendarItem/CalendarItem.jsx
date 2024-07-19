import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../../REUSABLE/Button/Button';
import css from './calendarItem.module.css';
import { selectMonthlyWaterItems } from 'src/redux/water/selectors';
import { selectUser } from 'src/redux/users/selectors';
import useChosenDate from 'src/hooks/useChosenDate.js';
import { fetchDailyWater } from 'src/redux/water/operations.js';
import toast from 'react-hot-toast';

export const CalendarItem = ({ day }) => {
  const { setChosenDay } = useChosenDate();
  const dispatch = useDispatch();
  const water = useSelector(selectMonthlyWaterItems);
  const user = useSelector(selectUser);
  const percentage = (water.totalVolume / (user.dailyNorma * 1000)) * 100;

  return (
    <>
      <li className={css.item}>
        <Button
          addClass={css.btn_item}
          onClick={() => {
            setChosenDay(day);
            dispatch(fetchDailyWater())
              .unwrap()
              .then(res => {
                res?.data?.length === 0
                  ? toast('You haven`t got your volumes for chosen day')
                  : toast.success(res.message);
              })
              .catch(err => toast.error(err.message));
          }}
        >
          {day}
        </Button>
        {!water.totalVolume ? <p> 0 %</p> : <p>{`${percentage}%`}</p>}
      </li>
    </>

  );
};

export default CalendarItem;
