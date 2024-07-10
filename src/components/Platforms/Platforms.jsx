import icon8 from 'assets/image/icon8.png';
import icon16 from 'assets/image/icon16.png';

import styles from './Platforms.module.css';

export const Platforms = ({ onChoose }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.platform} onClick={() => onChoose('Nintendo')}>
        <div className={styles.inner}>
          <div className={styles.front}>8-bit</div>
          <div className={styles.back}>
            <img src={icon8} alt="8-bit icon" className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.platform} onClick={() => onChoose('Sega')}>
        <div className={styles.inner}>
          <div className={styles.front}>16-bit</div>
          <div className={styles.back}>
            <img src={icon16} alt="16-bit icon" className={styles.icon} />
          </div>
        </div>
      </div>
    </section>
  );
};
