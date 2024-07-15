import { useDispatch } from 'react-redux';
import css from './deleteWaterModal.module.css';
import { closeModal } from 'src/redux/water/slice.js';

const DeleteWaterModal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      DeleteWaterModal
      <button onClick={() => dispatch(closeModal())}>close</button>
    </div>
  );
};

export default DeleteWaterModal;
