import Button from 'src/components/REUSABLE/Button/Button.jsx';
import ChooseDate from './ChooseDate/ChooseDate.jsx';
import WaterList from './WaterList/WaterList.jsx';
import css from '../DailyInfo/DailyInfo.module.css';
import { FaPlus } from 'react-icons/fa6';

const DailyInfo = () => {
  return (
    <>
      <ChooseDate />
      <Button addClass={css.btn} onClick={() => console.log('add water btn')}>
        <FaPlus className={css.plusIcon} />
        <span>Add water</span>
      </Button>
      <WaterList />
    </>
  );
};

export default DailyInfo;
