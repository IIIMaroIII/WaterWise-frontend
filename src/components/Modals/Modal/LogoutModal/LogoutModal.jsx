import css from './logoutModal.module.css';
import { useDispatch } from 'react-redux';
import { logout } from 'src/redux/users/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import { changeLogoutModalOpen, changeModal } from 'src/redux/water/slice.js';

const LogoutModal = ({ children, ...otherProps }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await dispatch(logout())
      .unwrap()
      .then(() => {
        dispatch(changeModal(false));
        navigate('/');
        toast.success('You have been successfully logged out, see you soon!');
      })
      .catch(err => toast.error(err?.message ?? 'Internal network error'));
  };

  return (
    <div className={css.logoutModal}>
      <div className={css.logoutModalwrapper}>
        <h2 className={css.title}>Log out</h2>
        <p className={css.text}>Do you really want to leave?</p>
        <div className={css.btnWrap}>
          <Button
            addClass={css.logoutModal_logoutBtn}
            onClick={handleSubmit}
            {...otherProps}
          >
            {children || 'Log out'}
          </Button>
          <Button
            addClass={css.logoutModal_cancelBtn}
            onClick={() => dispatch(changeModal(false))}
            {...otherProps}
          >
            {children || 'Cancel'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
