import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

import { ReactComponent as Rocket } from 'assets/image/svg/rocket.svg';

import styles from './ScrollToTopButton.module.css';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = throttle(() => {
      setIsVisible(window.scrollY > 300);
    }, 500);

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={isVisible ? styles.visible : styles.toTopBtn}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <Rocket className={styles.icon} />
    </button>
  );
};
