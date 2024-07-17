import Button from 'src/components/REUSABLE/Button/Button.jsx';
import ChooseDate from './ChooseDate/ChooseDate.jsx';
import WaterList from './WaterList/WaterList.jsx';
import css from '../DailyInfo/DailyInfo.module.css';
import { FaPlus } from 'react-icons/fa6';

const DailyInfo = () => {
  return (
    <>
      <div className={css.container}>
        <ChooseDate />
        <Button addClass={css.btn} onClick={() => console.log('add water btn')}>
          <FaPlus className={css.plusIcon} />
          <span className={css.btnSpan}>Add water</span>
        </Button>
      </div>
      <WaterList />
    </>
  );
};

export default DailyInfo;
