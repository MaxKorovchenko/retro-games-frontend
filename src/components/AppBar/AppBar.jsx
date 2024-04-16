import { NavBar } from 'components/NavBar/NavBar';
import { AuthNav } from 'components/AuthNav/AuthNav';

import styles from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header>
      <div className={styles.container}>
        <NavBar />
        <AuthNav />
      </div>
    </header>
  );
};
