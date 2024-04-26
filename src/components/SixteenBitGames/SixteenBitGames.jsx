import { useSelector } from 'react-redux';

import { selectGames } from 'myRedux/games/selectors';

export const SixteenBitGames = () => {
  const games = useSelector(selectGames);
  const SixteenBitGames = games.filter(game => game.platform === '16-bit');

  return (
    <ul>
      {SixteenBitGames.map(({ _id, title }) => (
        <li key={_id}>{title}</li>
      ))}
    </ul>
  );
};
