import { useState } from 'react';
import DeleteWaterModal from 'src/components/Modals/Modal/DeleteWaterModal/DeleteWaterModal.jsx';
import LogoutModal from 'src/components/Modals/Modal/LogoutModal/LogoutModal.jsx';
import MainModal from 'src/components/Modals/Modal/MainModal.jsx';
import UserSettingsModal from 'src/components/Modals/Modal/UserSettingsModal/UserSettingsModal.jsx';
import WaterModal from 'src/components/Modals/Modal/WaterModal/WaterModal.jsx';

const ModalsPage = () => {
  // if you need to render some modal, set your desired state to 'true' and click on Open Main Modal

  const [open, setOpen] = useState(false); //delete it after
  const [userSettingsModal, setUserSettingsModal] = useState(true); //delete it after
  const [waterModal, setWaterModal] = useState(false); //delete it after
  const [logoutModal, setLogoutModal] = useState(false); //delete it after
  const [deleteWaterModal, setDeleteWaterModal] = useState(false); //delete it after //

  const renderModal = () => {
    switch (true) {
      case userSettingsModal:
        return <UserSettingsModal />;
      case waterModal:
        return <WaterModal />;
      case logoutModal:
        return <LogoutModal />;
      case deleteWaterModal:
        return <DeleteWaterModal />;
      default:
        return null;
    }
  };
  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Open Main Modal
      </button>
      <MainModal open={open} close={() => setOpen(!open)}>
        {renderModal()}
      </MainModal>
    </>
  );
};

export default ModalsPage;
