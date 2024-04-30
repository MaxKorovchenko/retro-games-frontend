import { addToFavoriteGames } from 'myRedux/auth/operations';
import { selectIsLoggedIn } from 'myRedux/auth/selectors';
import { selectGames } from 'myRedux/games/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const GameDetails = () => {
  const { gameId } = useParams();
  const games = useSelector(selectGames);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const { title = '', platform = '' } =
    games.length && games.find(game => game._id === gameId);

  return (
    <div>
      <p>{title}</p>
      <p>{platform}</p>
      <button
        type="button"
        disabled={!isLoggedIn}
        onClick={() => dispatch(addToFavoriteGames(gameId))}
      >
        Add to favorite
      </button>
    </div>
  );
};
