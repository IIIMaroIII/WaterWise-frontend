import { useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
import { selectDailyNorma, selectWaterItems } from 'src/redux/water/selectors';

const WaterProgressBar = () => {
  const dailyNorma = useSelector(selectDailyNorma);
  const dailyWaterVolume = useSelector(selectWaterItems);
  const totalDailyVolume = dailyWaterVolume.reduce(
    (total, record) => total + record.volume,
    0,
  );
  const percentage = (totalDailyVolume / (dailyNorma * 1000)) * 100;
  return (
    <>
      {!dailyNorma ? null : (
        <div className={css.water_progress_container}>
          <h2>Today</h2>
          <div className={css.progress_bar}>
            <div
              className={css.progress}
              style={{ width: `${percentage}%` }}
            ></div>
            <div className={css.thumb} style={{ left: `${percentage}%` }}>
              <div className={css.thumb_value}>{`${Math.round(
                percentage,
              )}%`}</div>
            </div>
          </div>
          <div className={css.progress_labels}>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      )}
    </>
  );
};

export default WaterProgressBar;
