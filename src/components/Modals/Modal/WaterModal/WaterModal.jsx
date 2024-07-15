import css from './waterModal.module.css';
import WaterForm from '../../WaterForm/WaterForm.jsx';
import { useDispatch } from 'react-redux';
import { closeModal } from 'src/redux/water/slice.js';

const WaterModal = ({ operationName = '' }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(closeModal())}>close</button>
      {operationName === 'edit' ? (
        <div>
          <h2>Edit the entered amount of water</h2>
          <h3>Correct entered data:</h3>
        </div>
      ) : (
        <div>
          <h2>Edit the entered amount of water</h2>
          <h3>Choose a value:</h3>
        </div>
      )}
      <WaterForm />
    </div>
  );
};

export default WaterModal;
