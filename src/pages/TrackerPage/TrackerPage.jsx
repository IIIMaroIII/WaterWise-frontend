import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';

import css from './TrackerPage.module.css';

const TrackerPage = () => {
  return (
    <div className={css.flex}>
      <div className={css.container}>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </div>
    </div>
  );
};

export default TrackerPage;
