import { FaGlassWater, FaPen, FaTrash } from 'react-icons/fa6';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';
import { useState } from 'react';
import MainModal from 'src/components/Modals/Modal/MainModal.jsx';
import WaterModal from 'src/components/Modals/Modal/WaterModal/WaterModal.jsx';
import DeleteWaterModal from 'src/components/Modals/Modal/DeleteWaterModal/DeleteWaterModal.jsx';

const WaterItem = ({ item }) => {
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
            setModalOpen(true);
            console.log('Open edit water modal');
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
            setModalDeleteOpen(true);
            console.log('Open delete water modal');
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
