import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';
import { refresh } from 'src/redux/users/operations.js';
import { fetchDailyWater, fetchMonthlyWater } from 'src/redux/water/operations';
import { selectDate } from 'src/redux/water/selectors';
import { parseDate } from 'src/utils/parseDate';
import css from './TrackerPage.module.css';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setShowChart } from 'src/redux/chart/slice';

const TrackerPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/tracker/statistics') {
      dispatch(setShowChart(true));
    } else {
      dispatch(setShowChart(false));
    }
  }, [location.pathname, dispatch]);
  // const selectedDate = useSelector(selectDate);
  // const { day, month, year } = parseDate(selectedDate);

  // useEffect(() => {

  //   dispatch(fetchDailyWater({ day, month, year }));
  //   dispatch(fetchMonthlyWater({month, year }));
  // }, [dispatch, day, month, year]);

  const handleOnClick = () => {
    dispatch(refresh())
      .unwrap()
      .then(res => toast.success(res.message))
      .catch(err => toast.error(err.message));
  };

  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
