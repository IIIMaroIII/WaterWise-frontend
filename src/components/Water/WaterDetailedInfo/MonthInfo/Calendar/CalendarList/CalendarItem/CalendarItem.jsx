import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../../REUSABLE/Button/Button';
import css from './calendarItem.module.css';
import {
  selectMonthlyWaterItems,
  selectTotalDailyVolume,
} from 'src/redux/water/selectors';
import { selectUser } from 'src/redux/users/selectors';
import useChosenDate from 'src/hooks/useChosenDate.js';
import { fetchDailyWater } from 'src/redux/water/operations.js';
import toast from 'react-hot-toast';
import { totalDailyVolumes } from 'src/redux/water/slice.js';
import { useDailyVolumes } from 'src/hooks/useDailyVolumes.js';

export const CalendarItem = ({ day }) => {
  const dispatch = useDispatch();
  const { setChosenDay } = useChosenDate();
  const { dailyVolumesPercentage, dailyItems } = useDailyVolumes();

  

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
                if (res) {
                  return toast.success(
                    'Your daily records have been successfully fetched!',
                  );
                }
                dispatch(totalDailyVolumes(0));
                return toast(
                  'Your have not got any volume records for chosen day!',
                );
              })
              .catch(err => {
                console.log(err);
                return toast.error(err);
              });
          }}
        >
          {day}
        </Button>
        {!dailyItems ? <p> 0 %</p> : <p>{`${dailyVolumesPercentage}%`}</p>}
      </li>
    </>
  );
};

export default CalendarItem;
