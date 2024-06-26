import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { selectGames } from 'myRedux/games/selectors';

import styles from './SixteenBitGames.module.css';

export const SixteenBitGames = () => {
  const location = useLocation();
  const games = useSelector(selectGames);
  const SixteenBitGames = games.filter(game => game.platform === '16-bit');

  return (
    <ul className={styles.list}>
      {SixteenBitGames.map(({ _id, title }) => (
        <li key={_id}>
          <Link
            to={`/games/${_id}`}
            className={styles.link}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
