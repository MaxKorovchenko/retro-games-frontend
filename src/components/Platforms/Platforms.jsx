import { NavLink } from 'react-router-dom';

import styles from './Platforms.module.css';

export const Platforms = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.platform} to="8-bit">
        8-bit
      </NavLink>
      <NavLink className={styles.platform} to="16-bit">
        16-bit
      </NavLink>
    </div>
  );
};
