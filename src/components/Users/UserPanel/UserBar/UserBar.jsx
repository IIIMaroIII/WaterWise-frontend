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
        {<p>{user?.name}</p> ?? <p>User</p>}
        <div className={css.user_avatar}>
          <img
            alt="User Avatar"
            src={
              user?.photoUrl ??
              'https://img.icons8.com/?size=100&id=8VXh2TzKXNG8&format=png&color=000000'
            }
          />
        </div>
        {isPopoverOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isPopoverOpen && <UserBarPopover onClose={togglePopover} />}
    </>
  );
};

export default UserBar;
