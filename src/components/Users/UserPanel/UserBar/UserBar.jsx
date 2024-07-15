import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors';
import UserBarPopover from './UserBarPopover/UserBarPopover.jsx';
import css from './UserBar.module.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
const UserBar = () => {
  const user = useSelector(selectUser);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  return (
    <>
      <button onClick={togglePopover} className={css.user_bar_wrapper}>
        {!user.name ? <p>User</p> : <p>{user.name}</p>}
        <div className={css.user_avatar}>
{!user.avatar ? <img  alt="User Avatar" src="https://png.klev.club/uploads/posts/2024-05/png-klev-club-3aa8-p-ikonka-polzovatelya-png-12.png"/> : <img alt="User Avatar" src={user.photoUrl} />}
        </div>
        {isPopoverOpen? <FaAngleUp />:<FaAngleDown />}
      </button>
      {isPopoverOpen && <UserBarPopover onClose={togglePopover} />}
    </>
  );
};
 

export default UserBar;
