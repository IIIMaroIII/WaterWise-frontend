import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';
import { refresh } from 'src/redux/users/operations.js';
import { fetchDailyWater, fetchMonthlyWater } from 'src/redux/water/operations';
import { selectDate } from 'src/redux/water/selectors';
import { parseDate } from 'src/utils/parseDate';


const TrackerPage = () => {
  // const selectedDate = useSelector(selectDate);
  // const { day, month, year } = parseDate(selectedDate);
  const dispatch = useDispatch();


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
    <div>
      <Button onClick={handleOnClick}>Refresh the session</Button>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
