import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';
import { fetchDailyWater, fetchMonthlyWater } from 'src/redux/water/operations';

const TrackerPage = () => {
  const date = new Date();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDailyWater());
    // dispatch(fetchMonthlyWater(date));
  }, [dispatch]);

  return (
    <div>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
