import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectUser } from 'src/redux/users/selectors.js';
import {
  selectTotalDailyVolume,
  selectWaterItems,
} from 'src/redux/water/selectors.js';
import { totalDailyVolumes } from 'src/redux/water/slice.js';

export const useDailyVolumes = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const dailyItems = useSelector(selectWaterItems);
  const totalDailyVolume = useSelector(selectTotalDailyVolume);

  useEffect(() => {
    if (!dailyItems || dailyItems.length === 0) return;
    const totalVolume =
      dailyItems.reduce((total, record) => total + record.volume, 0) || 0;
    dispatch(totalDailyVolumes(totalVolume));
  }, [dailyItems, dispatch]);

  const dailyVolumesPercentage =
    totalDailyVolume > 0
      ? Math.round((totalDailyVolume / (user.dailyNorma * 1000)) * 100)
      : 0;

  return { dailyItems, totalDailyVolume, dailyVolumesPercentage };
};
