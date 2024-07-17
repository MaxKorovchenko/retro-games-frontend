import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { selectGames } from 'myRedux/games/selectors';

import styles from './GamesList.module.css';

export const GamesList = ({ platform }) => {
  const [filter, setFilter] = useState('');

  const location = useLocation();
  const games = useSelector(selectGames);
  const filteredGames = games.filter(
    game =>
      game.platform === platform && game.title.toLowerCase().includes(filter)
  );

  return (
    <div className={styles.container}>
      <label className={styles.filterLabel}>
        <span>Find your game</span>
        <input
          type="text"
          name="filter"
          className={styles.filterInput}
          value={filter}
          onChange={e => setFilter(e.target.value.toLowerCase())}
        />
      </label>

      <ul className={styles.list}>
        {filteredGames.map(({ _id, title }) => (
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
    </div>
  );
};
