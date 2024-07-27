import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  return (
    <div className={css.WaterProgressBar_container}>
      <h2 className={css.WaterProgressBar_h2}>Today</h2>
      <div className={css.WaterProgressBar}>
        <div className={css.progress}></div>
        <div className={css.thumb}>
          <div className={css.thumb_value}>{`0%`}</div>
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
