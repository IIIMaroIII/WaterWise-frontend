import css from './logoutModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/redux/users/operations';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import { selectIsLogoutModalOpen } from 'src/redux/water/selectors';

const LogoutModal = () => {
  const dispatch = useDispatch();
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success('Logout successful!');
        navigate('/');
      })
      .catch(() => toast.error('Oops, Logout went wrong, please try again!'));
  };

  // const handleCloseModal = () => setOpen(!open);

  return (
    <div>
      <h2 className={css.title}>Log out</h2>
      <p className={css.text}>Do you really want to leave?</p>
      {/* <button className={css.btn} onClick={handleSubmit}>
        Log out
      </button>
      <button className={css.btn} close={handleCloseModal}>
        Cancel
      </button> */}
      <Button addClass={css.logoutModal_logoutBtn} onClick={handleSubmit}>
        Logout
      </Button>
      <Button addClass={css.logoutModal_cancelBtn} onClick={() => {}}>
        Cancel
      </Button>
    </div>
  );
};

export default LogoutModal;
