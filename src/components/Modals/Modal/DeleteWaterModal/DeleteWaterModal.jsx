import { useDispatch } from 'react-redux';
import css from './deleteWaterModal.module.css';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import { changeDeleteWaterModalOpen, changeModal } from 'src/redux/water/slice';
import { deleteWater } from 'src/redux/water/operations';

const DeleteWaterModal = ({ children, ...otherProps }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(deleteWater())
      .unwrap()
      .then(() => {
        toast.success('Delete successful!');
      })
      .catch(() => toast.error('Oops, delete went wrong, please try again!'));
  };
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
