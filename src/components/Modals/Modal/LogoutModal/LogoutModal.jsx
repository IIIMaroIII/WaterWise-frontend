import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/redux/users/operations';
import { Children, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import css from './logoutModal.module.css';
import toast from 'react-hot-toast';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import { selectIsLogoutModalOpen } from 'src/redux/water/selectors';
import { changeLogoutModalOpen, changeModal } from 'src/redux/water/slice';

const LogoutModal = ({ children, ...otherProps }) => {
  const dispatch = useDispatch();
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

  return (
    <div>
      <h2 className={css.title}>Log out</h2>
      <p className={css.text}>Do you really want to leave?</p>
      <Button addClass={css.btn} onClick={handleSubmit} {...otherProps}>
        {children || 'Log out'}
      </Button>
      <Button
        addClass={css.btn}
        onClick={() => {
          dispatch(changeLogoutModalOpen(false));
          dispatch(changeModal(false));
        }}
      >
        {children || 'Cancel'}
      </Button>
    </div>
  );
};

export default LogoutModal;
