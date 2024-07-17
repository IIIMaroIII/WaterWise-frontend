import { useSelector } from 'react-redux';

import { selectUser } from 'src/redux/users/selectors';
import UserBar from './UserBar/UserBar.jsx';
import css from './UserPanel.module.css'
const UserPanel = () => {
  const user = useSelector(selectUser);
  return (
    <div  className={css.user_panel}>
      <p>Hello, dear {!user.name ? <span>User</span> : <span>{user.name}</span>}!</p>
      <UserBar />
    </div>
  );
};

export default UserPanel;
