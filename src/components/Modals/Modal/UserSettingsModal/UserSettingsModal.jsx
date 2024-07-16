import UsersSettingsForm from '../../UsersSettingsForm/UsersSettingsForm.jsx';
import css from './userSettingsModal.module.css';
import { useState } from 'react';

const UserSettingsModal = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleUpdate = data => {};
  return (
    <div className={css.apContainer}>
      <h2 className={css.apSetting}>Setting</h2>
      <button className={css.apSettingButton} onClick={handleOpenModal}>Setting</button>
      <UsersSettingsForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default UserSettingsModal;
