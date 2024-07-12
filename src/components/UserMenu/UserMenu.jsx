import { useDispatch, useSelector } from 'react-redux';

import { logout } from 'myRedux/auth/operations';
import { selectUser } from 'myRedux/auth/selectors';

import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>{user.name}</p>
      <button className={styles.btn} type="button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};
