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
const UserBarPopover = ({ onClose }) => {
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
        <button
          className={css.popover_btn}
          type="button"
          onClick={() => {
            dispatch(changeUsersSettingsModalOpen(true));
            dispatch(changeModal(true));
            onClose();
          }}
        >
          <CiSettings /> Settings
        </button>
      </li>
      <li>
        <button
          className={css.popover_btn}
          type="button"
          onClick={() => {
            dispatch(changeLogoutModalOpen(true));
            dispatch(changeModal(true));
            onClose();
          }}
        >
          <FiLogOut /> Log out
        </button>
      </li>
    </ul>
  );
};

export default UserBarPopover;
