import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';
import { refresh } from 'src/redux/users/operations.js';
import { fetchDailyWater, fetchMonthlyWater } from 'src/redux/water/operations';


const TrackerPage = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const date = new Date();
  //   dispatch(fetchDailyWater());
  //   dispatch(fetchMonthlyWater(date));
  // }, [dispatch]);

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
