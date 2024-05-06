import { useSelector } from 'react-redux';

import { selectGames } from 'myRedux/games/selectors';
import { Link } from 'react-router-dom';

export const SixteenBitGames = () => {
  const games = useSelector(selectGames);
  const SixteenBitGames = games.filter(game => game.platform === '16-bit');

  return (
    <ul>
      {SixteenBitGames.map(({ _id, title }) => (
        <li key={_id}>
          <Link to={`/games/${_id}`} style={{ color: 'white' }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
