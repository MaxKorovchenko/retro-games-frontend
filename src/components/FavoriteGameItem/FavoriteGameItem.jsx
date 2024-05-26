import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <button type="button" onClick={handleFavoriteGameDelete}>
        X
      </button>
    </div>
  );
};
