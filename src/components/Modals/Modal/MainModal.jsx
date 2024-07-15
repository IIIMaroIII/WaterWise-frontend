import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalOpen } from 'src/redux/water/selectors.js';
import { closeModal } from 'src/redux/water/slice.js';

const MainModal = ({ children }) => {
  const dispatch = useDispatch()
  const isModalOpen = useSelector(modalOpen);

  const handleClose = () => {
    dispatch(closeModal());
  }
//! Рендерится 6 раз, пока не знаю почему
  return (
    <div>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={isModalOpen}
        onRequestClose={handleClose}
        contentLabel="Main Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

export default MainModal;
