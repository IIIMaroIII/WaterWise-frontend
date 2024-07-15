import css from './WaterMainInfo.module.css';

import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar.jsx';

const WaterMainInfo = () => {
  return (
    <section className={css.section_wrapper}>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </section>
  );
};

export default WaterMainInfo;
