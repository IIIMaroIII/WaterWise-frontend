import css from './WaterProgressBar.module.css';

import { useDailyVolumes } from 'src/hooks/useDailyVolumes.js';

const WaterProgressBar = () => {
  const { dailyVolumesPercentage } = useDailyVolumes();

  return (
    <div className={css.water_progress_container}>
      <h2>Today</h2>
      <div className={css.progress_bar}>
        <div
          className={css.progress}
          style={{ width: `${dailyVolumesPercentage}%` }}
        ></div>
        <div
          className={css.thumb}
          style={{ left: `${dailyVolumesPercentage}%` }}
        >
          <div className={css.thumb_value}>{`${Math.round(
            dailyVolumesPercentage,
          )}%`}</div>
        </div>
      </div>
      <div className={css.progress_labels}>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default WaterProgressBar;
