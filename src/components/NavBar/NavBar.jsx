import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'myRedux/auth/selectors';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="8-bit">
        8-bit
      </NavLink>
      <NavLink className={styles.link} to="16-bit">
        16-bit
      </NavLink>

      {isLoggedIn && (
        <NavLink className={styles.link} to="favorites">
          Favorite Games
        </NavLink>
      )}
    </nav>
  );
};
