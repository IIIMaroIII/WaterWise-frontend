import { FaGlassWater, FaPen, FaTrash } from 'react-icons/fa6';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';
import MainModal from 'src/components/Modals/Modal/MainModal.jsx';
import WaterModal from 'src/components/Modals/Modal/WaterModal/WaterModal.jsx';
import DeleteWaterModal from 'src/components/Modals/Modal/DeleteWaterModal/DeleteWaterModal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from 'src/redux/water/slice.js';
import { modalOpen } from 'src/redux/water/selectors.js';

const WaterItem = ({ item }) => {
  const isModalOpen = useSelector(modalOpen);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div>
        <FaGlassWater />
        <p>{item.volume}</p>
        <p>{item.date}</p>
      </div>
      <div className={css.btnContainer}>
        <Button
          addClass={css.button}
          onClick={() => {
            handleOpen();
            console.log('Open edit water modal');
          }}
        >
          <FaPen />
        </Button>
          <MainModal>
            <WaterModal operationName="edit" />
          </MainModal>

        <Button
          addClass={css.button}
          onClick={() => {
            handleOpen()
            console.log('Open delete water modal');
          }}
        >
          <FaTrash />
        </Button>
          <MainModal>
            <DeleteWaterModal />
          </MainModal>
      </div>
    </>
  );
};

export default WaterItem;
