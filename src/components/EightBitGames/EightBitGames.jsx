import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectGames } from 'myRedux/games/selectors';

export const EightBitGames = () => {
  const games = useSelector(selectGames);
  const eightBitGames = games.filter(game => game.platform === '8-bit');

  return (
    <ul>
      {eightBitGames.map(({ _id, title }) => (
        <li key={_id}>
          <Link to={`/games/${_id}`} style={{ color: 'white' }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
