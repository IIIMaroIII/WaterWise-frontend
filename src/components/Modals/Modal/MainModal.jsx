import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
};

const MainModal = ({ children, open, close }) => {
  return (
    <div>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={open}
        style={customStyles}
        onRequestClose={() => close(close)}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

export default MainModal;
