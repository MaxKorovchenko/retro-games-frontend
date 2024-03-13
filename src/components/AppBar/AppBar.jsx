import { NavBar } from 'components/NavBar/NavBar';
import styles from './AppBar.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';

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
