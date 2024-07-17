import { useSelector } from 'react-redux';

import { selectUser } from 'src/redux/users/selectors';
import UserBar from './UserBar/UserBar.jsx';
import css from './UserPanel.module.css';
const UserPanel = () => {
  const user = useSelector(selectUser);

  return (
    <div className={css.user_panel}>
      {/* <div>Hello, dear {!user.name ? <p>User</p> : <p>{user.name}</p>}</div> */}
      <div>Hello, dear {<p>{user?.name}</p> ?? <p>User</p>}</div>
      <UserBar />
    </div>
  );
};

export default UserPanel;
