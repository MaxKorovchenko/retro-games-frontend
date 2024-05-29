import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addToFavoriteGames } from 'myRedux/auth/operations';
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectUser,
} from 'myRedux/auth/selectors';
import { selectGames } from 'myRedux/games/selectors';
import { SlickSlider } from 'components/SlickSlider/SlickSlider';

import cover8 from 'assets/image/cover8.jpg';
// import cover16 from 'assets/image/cover16.jpg';
import icon8 from 'assets/image/icon8.png';
import icon16 from 'assets/image/icon16.png';

import styles from './GameDetails.module.css';

export const GameDetails = () => {
  const { gameId } = useParams();
  const games = useSelector(selectGames);
  const { favoriteGames } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/');

  const {
    title = '',
    platform = '',
    coverImageURL = cover8,
    description = 'Retro game',
    genre = 'Undefined',
    numberOfPlayers = 1,
    releaseYear = 'Undefined',
    gallery = [],
  } = games.length && games.find(game => game._id === gameId);

  const shouldDisableBtn =
    !isLoggedIn || isLoading || favoriteGames.includes(gameId);

  const handleAddToFavoriteGames = () =>
    dispatch(addToFavoriteGames(gameId)).then(() =>
      toast.success(`${title} was successfully added to your favorites`)
    );

  return (
    <div className={styles.container}>
      <Link to={backLinkRef.current} className={styles.link}>
        &lArr; Back to games
      </Link>

      <div className={styles.wrapper}>
        <img src={coverImageURL} alt="retro game" width={320} />

        <div>
          <h2>{title}</h2>
          <p>Genre: {genre}</p>
          <p>Number of Players: {numberOfPlayers}</p>
          <p>Release Year: {releaseYear}</p>
        </div>
      </div>

      <p>{description}</p>
      <button
        className={styles.btn}
        type="button"
        disabled={shouldDisableBtn}
        onClick={handleAddToFavoriteGames}
      >
        Add to favorite
      </button>

      <img
        className={styles.icon}
        src={platform === '8-bit' ? icon8 : icon16}
        alt="console"
        width={120}
      />

      <SlickSlider items={gallery} title={title} />
    </div>
  );
};
