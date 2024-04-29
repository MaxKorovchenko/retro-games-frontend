import { selectGames } from 'myRedux/games/selectors';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const GameDetails = () => {
  const { gameId } = useParams();
  const games = useSelector(selectGames);

  const { title = '', platform = '' } =
    games.length && games.find(game => game._id === gameId);

  return (
    <div>
      <p>{title}</p>
      <p>{platform}</p>
    </div>
  );
};
