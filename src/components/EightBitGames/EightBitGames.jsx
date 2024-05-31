import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { selectGames } from 'myRedux/games/selectors';

import styles from './EightBitGames.module.css';

export const EightBitGames = () => {
  const location = useLocation();
  const games = useSelector(selectGames);
  const eightBitGames = games.filter(game => game.platform === '8-bit');

  return (
    <ul className={styles.list}>
      {eightBitGames.map(({ _id, title }) => (
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
