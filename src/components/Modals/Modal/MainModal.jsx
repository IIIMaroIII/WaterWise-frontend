import Modal from 'react-modal';
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
    <div>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={modal}
        onRequestClose={() => dispatch(changeModal(false))}
        contentLabel="Example Modal"
      >
        {renderModal()}
        {/* <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          nobis rem harum voluptatibus placeat unde doloribus obcaecati labore
          deserunt qui necessitatibus, asperiores ducimus sit tempora illo
          sapiente, tempore quisquam dolor nisi at delectus? Quidem ipsum cumque
          officia quasi ipsam ratione, nulla vel commodi fuga fugit natus iure
          nihil perferendis earum.
        </div> */}
      </Modal>
    </div>
  );
};

export default MainModal;
