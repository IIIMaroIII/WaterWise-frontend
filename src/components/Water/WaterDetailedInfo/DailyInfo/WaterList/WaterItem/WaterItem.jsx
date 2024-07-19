import { FaGlassWater, FaPen, FaTrash } from 'react-icons/fa6';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';
import { useState } from 'react';
import MainModal from 'src/components/Modals/Modal/MainModal.jsx';
import WaterModal from 'src/components/Modals/Modal/WaterModal/WaterModal.jsx';
import DeleteWaterModal from 'src/components/Modals/Modal/DeleteWaterModal/DeleteWaterModal.jsx';
import {
  changeDeleteWaterModalOpen,
  changeModal,
  changeWaterModalEdit,
} from 'src/redux/water/slice';
import { useDispatch } from 'react-redux';

const WaterItem = ({ item }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

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
            dispatch(changeWaterModalEdit(true));
            dispatch(changeModal(true));
          }}
        >
          <FaPen />
        </Button>
        {modalOpen && (
          <MainModal open={modalOpen} close={setModalOpen}>
            <WaterModal operationName="edit" />
          </MainModal>
        )}

        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeDeleteWaterModalOpen(true));
            dispatch(changeModal(true));
          }}
        >
          <FaTrash />
        </Button>
        {modalDeleteOpen && (
          <MainModal open={modalDeleteOpen} close={setModalDeleteOpen}>
            <DeleteWaterModal />
          </MainModal>
        )}
      </div>
    </>
  );
};

export default WaterItem;
