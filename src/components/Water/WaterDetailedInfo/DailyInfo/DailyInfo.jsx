import Button from 'src/components/REUSABLE/Button/Button.jsx';
import ChooseDate from './ChooseDate/ChooseDate.jsx';
import WaterList from './WaterList/WaterList.jsx';
import css from '../DailyInfo/DailyInfo.module.css';
import { FaPlus } from 'react-icons/fa6';
import { changeModal, changeWaterModalAdd } from 'src/redux/water/slice.js';
import { useDispatch } from 'react-redux';

const DailyInfo = ({ children, ...otherProps }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ChooseDate />
      <Button
        addClass={css.btn}
        onClick={() => {
          dispatch(changeWaterModalAdd(true));
          dispatch(changeModal(true));
        }}
        {...otherProps}
      >
        <FaPlus className={css.plusIcon} />
        <span>{children || 'Add water'}</span>
      </Button>
      <WaterList />
    </>
  );
};

export default DailyInfo;
