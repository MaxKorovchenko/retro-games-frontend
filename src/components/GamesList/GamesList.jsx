import { useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { selectGames } from 'myRedux/games/selectors';

import styles from './GamesList.module.css';

export const GamesList = ({ platform }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const gameTitle = searchParams.get('title') ?? '';

  const updateQueryString = title => {
    const nextParams = title !== '' ? { title } : {};
    setSearchParams(nextParams);
  };

  const location = useLocation();
  const games = useSelector(selectGames);
  const filteredGames = games.filter(
    game =>
      game.platform === platform && game.title.toLowerCase().includes(gameTitle)
  );

  return (
    <div className={styles.container}>
      <label className={styles.filterLabel}>
        <span>Find your game</span>
        <input
          type="text"
          name="filter"
          className={styles.filterInput}
          value={gameTitle}
          onChange={e => updateQueryString(e.target.value.toLowerCase())}
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
