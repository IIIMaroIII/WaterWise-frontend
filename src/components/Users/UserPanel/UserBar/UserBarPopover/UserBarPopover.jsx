import { useRef, useEffect } from 'react';
import { CiSettings } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import css from './UserBarPopover.module.css';
import { useDispatch } from 'react-redux';
import {
  changeLogoutModalOpen,
  changeModal,
  changeUsersSettingsModalOpen,
} from 'src/redux/water/slice';
import Button from 'src/components/REUSABLE/Button/Button';
const UserBarPopover = (onClose, { children, ...otherProps }) => {
  const popoverRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = event => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <ul ref={popoverRef} className={css.popover_list}>
      <li>
        <Button
          className={css.popover_btn}
          type="button"
          onClick={() => {
            dispatch(changeUsersSettingsModalOpen(true));
            dispatch(changeModal(true));
          }}
          {...otherProps}
        >
          <CiSettings /> {children || 'Settings'}
        </Button>
      </li>
      <li>
        <Button
          className={css.popover_btn}
          type="button"
          onClick={() => {
            dispatch(changeLogoutModalOpen(true));
            dispatch(changeModal(true));
          }}
          {...otherProps}
        >
          <FiLogOut /> {children || 'Log out'}
        </Button>
      </li>
    </ul>
  );
};

export default UserBarPopover;
