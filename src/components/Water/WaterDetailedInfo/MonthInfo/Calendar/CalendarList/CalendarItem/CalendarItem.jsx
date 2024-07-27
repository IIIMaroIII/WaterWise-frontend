import { useDispatch } from 'react-redux';
import Button from '../../../../../../REUSABLE/Button/Button';
import css from './calendarItem.module.css';

import useChosenDate from 'src/hooks/useChosenDate.js';
import { fetchDailyWater } from 'src/redux/water/operations.js';
import toast from 'react-hot-toast';
import { totalDailyVolumes } from 'src/redux/water/slice.js';

export const CalendarItem = ({ day, month }) => {
  const dispatch = useDispatch();
  const { setChosenDay } = useChosenDate();

  const items = document.querySelectorAll(`.${css.btn_item}`);

  const target = e => {
    const btn = e.currentTarget.children[0];
    btn.classList.add(`${css.active}`);

    items.forEach(item => {
      if (item.id !== e.currentTarget.id)
        item.classList.remove(`${css.active}`);
    });
  };

  return (
    <>
      <li className={css.item} id={day} onClick={target}>
        <Button
          id={day}
          addClass={css.btn_item}
          onClick={() => {
            setChosenDay(day);
            dispatch(fetchDailyWater())
              .unwrap()
              .then(res => {
                if (res) {
                  toast.success(
                    'Your daily records have been successfully fetched!',
                  );
                }
                dispatch(totalDailyVolumes(0));
                toast('Your have not got any volume records for chosen day!');
              })
              .catch(err => {
                console.error(err);
                return toast.error(err);
              });
          }}
        >
          {day}
        </Button>
        <p>{`0%`}</p>
      </li>
    </>
  );
};

export default CalendarItem;
