import { useSelector } from 'react-redux';

import { selectUser } from 'myRedux/auth/selectors';
import { selectGames } from 'myRedux/games/selectors';
import { FavoriteGameItem } from 'components/FavoriteGameItem/FavoriteGameItem';

import styles from './FavoriteGames.module.css';

export const FavoriteGames = () => {
  const games = useSelector(selectGames);
  const { favoriteGames } = useSelector(selectUser);

  const userFavorites8Bit = games.filter(
    game => favoriteGames.includes(game._id) && game.platform === '8-bit'
  );

  const userFavorites16Bit = games.filter(
    game => favoriteGames.includes(game._id) && game.platform === '16-bit'
  );

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <h2 className={styles.title}>My Favorite 8-Bit Games</h2>
        {userFavorites8Bit.length > 0 ? (
          <ul>
            {userFavorites8Bit.map(({ _id, title }) => (
              <li className={styles.item} key={_id}>
                <FavoriteGameItem gameId={_id} title={title} />
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: 'grey' }}>Your 8-bit games will be here</p>
        )}
      </div>

      <div className={styles.list}>
        <h2 className={styles.title}>My Favorite 16-Bit Games</h2>
        {userFavorites16Bit.length > 0 ? (
          <ul>
            {userFavorites16Bit.map(({ _id, title }) => (
              <li className={styles.item} key={_id}>
                <FavoriteGameItem gameId={_id} title={title} />
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: 'grey' }}>Your 16-bit games will be here</p>
        )}
      </div>
    </div>
  );
};
