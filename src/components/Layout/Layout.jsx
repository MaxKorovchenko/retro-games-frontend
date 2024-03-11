import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>Header</header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </div>
  );
};
