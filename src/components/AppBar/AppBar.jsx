import { useSelector } from 'react-redux';

import { NavBar } from 'components/NavBar/NavBar';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'myRedux/auth/selectors';

import styles from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <div className={styles.container}>
        <NavBar />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
