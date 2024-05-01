import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addToFavoriteGames } from 'myRedux/auth/operations';
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectUser,
} from 'myRedux/auth/selectors';
import { selectGames } from 'myRedux/games/selectors';

export const GameDetails = () => {
  const { gameId } = useParams();
  const games = useSelector(selectGames);
  const { favoriteGames } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const { title = '', platform = '' } =
    games.length && games.find(game => game._id === gameId);

  const shouldDisableBtn =
    !isLoggedIn || isLoading || favoriteGames.includes(gameId);

  const handleAddToFavoriteGames = () =>
    dispatch(addToFavoriteGames(gameId)).then(() =>
      toast.success(`${title} successfully added to your favorites`)
    );

  return (
    <div>
      <p>{title}</p>
      <p>{platform}</p>
      <button
        type="button"
        disabled={shouldDisableBtn}
        onClick={handleAddToFavoriteGames}
      >
        Add to favorite
      </button>
    </div>
  );
};
