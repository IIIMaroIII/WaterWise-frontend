import Modal from 'react-modal';

const MainModal = ({ children, open, close }) => {
  return (
    <div>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={open}
        onRequestClose={() => close(close)}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

export default MainModal;
