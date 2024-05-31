import { NavLink } from 'react-router-dom';

import icon8 from 'assets/image/icon8.png';
import icon16 from 'assets/image/icon16.png';

import styles from './Platforms.module.css';

export const Platforms = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.platform} to="8-bit">
        <div className={styles.inner}>
          <div className={styles.front}>8-bit</div>
          <div className={styles.back}>
            <img src={icon8} alt="8-bit icon" className={styles.icon} />
          </div>
        </div>
      </NavLink>
      <NavLink className={styles.platform} to="16-bit">
        <div className={styles.inner}>
          <div className={styles.front}>16-bit</div>
          <div className={styles.back}>
            <img src={icon16} alt="16-bit icon" className={styles.icon} />
          </div>
        </div>
      </NavLink>
    </div>
  );
};
