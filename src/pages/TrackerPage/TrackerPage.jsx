// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import Button from 'src/components/REUSABLE/Button/Button.jsx';
import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';
// import { refresh } from 'src/redux/users/operations.js';
// import { fetchDailyWater, fetchMonthlyWater } from 'src/redux/water/operations';
import css from './TrackerPage.module.css'

const TrackerPage = () => {
  // const date = new Date();

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDailyWater());
  //   // dispatch(fetchMonthlyWater(date));
  // }, [dispatch]);

  // const handleOnClick = () => {
  //   dispatch(refresh())
  //     .unwrap()
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };

  return (
    <div className={css.container}>
      {/* <Button onClick={handleOnClick}>Refresh</Button> */}
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
