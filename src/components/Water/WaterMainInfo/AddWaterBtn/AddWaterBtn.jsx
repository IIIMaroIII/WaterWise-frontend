import Button from 'src/components/REUSABLE/Button/Button';
import css from './AddWaterBtn.module.css';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { changeModal, changeWaterModalAdd } from 'src/redux/water/slice';

const AddWaterBtn = ({ children, ...otherProps }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(changeModal(true));
    dispatch(changeWaterModalAdd(true));
  };
  return (
    <Button addClass={css.btn} onClick={openModal} {...otherProps}>
      <FaPlus className={css.plus_icon} />
      {children || 'Add water'}
    </Button>
  );
};

export default AddWaterBtn;
