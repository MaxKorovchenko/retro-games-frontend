import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from 'react-icons/fa';

import { removeFromFavoriteGames } from 'myRedux/auth/operations';

import styles from './FavoriteGameItem.module.css';

export const FavoriteGameItem = ({ gameId, title }) => {
  const dispatch = useDispatch();

  const handleFavoriteGameDelete = () => {
    dispatch(removeFromFavoriteGames(gameId)).then(() =>
      toast.info(`${title} was successfully removed from your favorites`)
    );
  };

  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={handleFavoriteGameDelete}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};
