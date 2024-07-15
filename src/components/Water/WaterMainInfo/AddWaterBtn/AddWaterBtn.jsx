import Button from 'src/components/REUSABLE/Button/Button';
import css from './AddWaterBtn.module.css';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch} from 'react-redux';
import { changeModal, changeWaterModal } from 'src/redux/water/slice';




const AddWaterBtn = () => {
  const dispatch = useDispatch();
  
  const openModal = () => {
    dispatch(changeWaterModal(true));   
    dispatch(changeModal(true));
  }
  return (
   
        <Button addClass={css.btn} onClick={openModal}>
          <FaPlus className={css.plus_icon} />
          <span>Add water</span>
      </Button>
    
  )
}

export default AddWaterBtn
