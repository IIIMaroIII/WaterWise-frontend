import Modal from 'react-modal';
import css from './mainModal.module.css';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsModalOpen,
  selectIsWaterModalEdit,
  selectIsWaterModalAdd,
  selectIsDeleteWaterModalOpen,
  selectIsLogoutModalOpen,
  selectIsUsersSettingsModalOpen,
} from '../../../redux/water/selectors';
import WaterModal from './WaterModal/WaterModal';
import DeleteWaterModal from './DeleteWaterModal/DeleteWaterModal';
import LogoutModal from './LogoutModal/LogoutModal';
import UserSettingsModal from './UserSettingsModal/UserSettingsModal';
import { changeModal } from 'src/redux/water/slice.js';

const MainModal = () => {
  const dispatch = useDispatch();
  const waterModalEdit = useSelector(selectIsWaterModalEdit);
  const waterModalAdd = useSelector(selectIsWaterModalAdd);
  const modal = useSelector(selectIsModalOpen);
  const deleteWaterModal = useSelector(selectIsDeleteWaterModalOpen);
  const logoutModal = useSelector(selectIsLogoutModalOpen);
  const usersSettingsModal = useSelector(selectIsUsersSettingsModalOpen);

  const renderModal = () => {
    if (waterModalEdit) {
      return <WaterModal operationName="edit" />;
    }
    if (waterModalAdd) {
      return <WaterModal operationName="add" />;
    }
    if (deleteWaterModal) {
      return <DeleteWaterModal />;
    }
    if (logoutModal) {
      return <LogoutModal />;
    }
    if (usersSettingsModal) {
      return <UserSettingsModal />;
    }
  };

  return (
    <div className={css.backdrop}>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={modal}
        onRequestClose={() => dispatch(changeModal(false))}
        contentLabel="Example Modal"
        className={css.mainModalStyle}
      >
        {renderModal()}

        <button
          className={css.closeBtn}
          onClick={() => dispatch(changeModal(false))}
        >
          <RxCross1 className={css.crossIcon} />
        </button>
      </Modal>
    </div>
  );
};

export default MainModal;
