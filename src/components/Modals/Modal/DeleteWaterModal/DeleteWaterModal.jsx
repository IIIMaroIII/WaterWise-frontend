import { useDispatch } from 'react-redux';
import css from './deleteWaterModal.module.css';

const DeleteWaterModal = ({ children, ...otherProps }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className={css.title}>Delete</h2>
      <p className={css.text}>Do you really delete?</p>
      <Button addClass={css.btn} onClick={handleSubmit} {...otherProps}>
        {children || 'Delete'}
      </Button>
      <Button
        addClass={css.btn}
        onClick={() => {
          dispatch(changeDeleteWaterModalOpen(false));
          dispatch(changeModal(false));
        }}
      >
        {children || 'Cancel'}
      </Button>
    </div>
  );
};

export default DeleteWaterModal;
