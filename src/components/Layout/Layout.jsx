import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <AppBar />

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
