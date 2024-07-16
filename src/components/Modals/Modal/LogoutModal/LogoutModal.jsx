import css from './logoutModal.module.css';
import { useDispatch } from 'react-redux';
import { logout } from 'src/redux/users/operations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleSubmit = (values, actions) => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success('Registration successful!');
        navigate('/');
      })
      .catch(() => toast.error('Oops, Logout went wrong, please try again!'));
  };

  const handleCloseModal = () => setOpen(!open);

  return (
    <div>
      <h2 className={css.title}>Log out</h2>
      <p className={css.text}>Do you really want to leave?</p>
      <button className={css.btn} onClick={handleSubmit}>
        Log out
      </button>
      <button className={css.btn} close={handleCloseModal}>
        Cancel
      </button>
    </div>
  );
};

export default LogoutModal;
