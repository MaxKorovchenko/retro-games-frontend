import { selectUser } from 'myRedux/auth/selectors';
import { selectGames } from 'myRedux/games/selectors';
import { useSelector } from 'react-redux';

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
    <div>
      <div>
        <h3>My Favorite 8-Bit Games</h3>
        {userFavorites8Bit.length > 0 ? (
          <ul>
            {userFavorites8Bit.map(({ _id, title }) => (
              <li key={_id}>
                <p>{title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your 8-bit games will be here</p>
        )}
      </div>

      <div>
        <h3>My Favorite 16-Bit Games</h3>
        {userFavorites16Bit.length > 0 ? (
          <ul>
            {userFavorites16Bit.map(({ _id, title }) => (
              <li key={_id}>
                <p>{title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your 16-bit games will be here</p>
        )}
      </div>
    </div>
  );
};
