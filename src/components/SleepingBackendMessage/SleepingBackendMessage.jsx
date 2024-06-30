import rr from 'assets/image/sleeping-back/rr.webp';
import sonic from 'assets/image/sleeping-back/sonic.webp';
import jim from 'assets/image/sleeping-back/jim.webp';
import dd from 'assets/image/sleeping-back/darkwing-duck.webp';
import mario from 'assets/image/sleeping-back/mario.webp';
import chipDale from 'assets/image/sleeping-back/chip-dale.webp';

import styles from './SleepingBackendMessage.module.css';

const images16 = [rr, sonic, jim];
const images8 = [dd, mario, chipDale];

export const SleepingBackendMessage = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        {images16.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`cartoon ${index + 1}`}
            className={`${styles.animatedImage16} ${styles[`delay${index}`]}`}
          />
        ))}

        <p className={styles.message}>
          The backend is currently sleeping. The application will start in 1
          minute.
        </p>

        {images8.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`cartoon ${index + 1}`}
            className={`${styles.animatedImage8} ${styles[`delay${index}`]}`}
          />
        ))}
      </div>
    </div>
  );
};
