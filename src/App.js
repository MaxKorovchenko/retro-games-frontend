import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const EightBitGamesPage = lazy(() => import('./pages/EightBitGamesPage'));
const SixteenBitGamesPage = lazy(() => import('./pages/SixteenBitGamesPage'));
const GameDetailsPage = lazy(() => import('./pages/GameDetailsPage'));
const FavoriteGames = lazy(() => import('./pages/FavoriteGames'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="8-bit" element={<EightBitGamesPage />} />
        <Route path="16-bit" element={<SixteenBitGamesPage />} />
        <Route path="games/:gameId" element={<GameDetailsPage />} />
        <Route path="favorites" element={<FavoriteGames />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
