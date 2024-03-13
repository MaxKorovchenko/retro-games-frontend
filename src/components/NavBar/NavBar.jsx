import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

export const NavBar = () => {
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
      <NavLink className={styles.link} to="favorites">
        Favorite Games
      </NavLink>
    </nav>
  );
};
