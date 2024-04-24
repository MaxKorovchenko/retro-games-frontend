import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Layout } from 'components/Layout/Layout';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { selectIsRefreshing } from 'myRedux/auth/selectors';
import { refreshUser } from 'myRedux/auth/operations';

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'https://retro-games-backend.onrender.com';

axios.defaults.baseURL = URL;

const HomePage = lazy(() => import('./pages/HomePage'));
const EightBitGamesPage = lazy(() => import('./pages/EightBitGamesPage'));
const SixteenBitGamesPage = lazy(() => import('./pages/SixteenBitGamesPage'));
const GameDetailsPage = lazy(() => import('./pages/GameDetailsPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="8-bit" element={<EightBitGamesPage />} />
          <Route path="16-bit" element={<SixteenBitGamesPage />} />
          <Route path="games/:gameId" element={<GameDetailsPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    )
  );
};
