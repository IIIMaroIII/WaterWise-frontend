import Button from 'src/components/REUSABLE/Button/Button';
import css from './AddWaterBtn.module.css';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { changeModal, changeWaterModalAdd } from 'src/redux/water/slice';

const AddWaterBtn = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(changeModal(true));
    dispatch(changeWaterModalAdd(true));
  };
  return (
    <div className={css.btn_container}>
      <Button addClass={css.btn} onClick={openModal}>
        <FaPlus className={css.plus_icon} />
        Add water
      </Button>
    </div>
  );
};

export default AddWaterBtn;
