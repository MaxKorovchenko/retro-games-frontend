import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from 'react-icons/fa';

import { removeFromFavoriteGames } from 'myRedux/auth/operations';

import styles from './FavoriteGamesItem.module.css';
import { Link, useLocation } from 'react-router-dom';

export const FavoriteGamesItem = ({ gameId, title }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleFavoriteGameDelete = () => {
    dispatch(removeFromFavoriteGames(gameId)).then(() =>
      toast.info(`${title} was successfully removed from your favorites`)
    );
  };

  return (
    <Link
      className={styles.link}
      to={`/games/${gameId}`}
      state={{ from: location }}
    >
      <p>{title}</p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={handleFavoriteGameDelete}
      >
        <FaTrashAlt />
      </button>
    </Link>
  );
};
