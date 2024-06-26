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
import Emulator from 'components/Emulator/Emulator';

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
    romName = 'Aladdin.bin',
  } = games.length && games.find(game => game._id === gameId);

  const shouldDisableBtn =
    !isLoggedIn || isLoading || favoriteGames.includes(gameId);

  const handleAddToFavoriteGames = () =>
    dispatch(addToFavoriteGames(gameId)).then(() =>
      toast.success(`${title} was successfully added to your favorites`)
    );

  const isPlatform8Bit = platform === '8-bit';
  const platformClass = isPlatform8Bit ? styles.dendy : styles.sega;

  return (
    <div className={`${styles.container} ${platformClass}`}>
      <Link to={backLinkRef.current} className={styles.backLink}>
        &lArr; Back to games
      </Link>

      <div className={styles.wrapper}>
        <img
          className={styles.cartridgeImg}
          src={coverImageURL}
          alt="retro game"
          width={320}
          height={240}
        />

        <div className={styles.gameInfo}>
          <h2 className={styles.gameTitle}>{title}</h2>
          <p className={styles.text}>Genre: {genre}</p>
          <p className={styles.text}>Number of Players: {numberOfPlayers}</p>
          <p className={styles.text}>Release Year: {releaseYear}</p>
        </div>
      </div>

      <p className={styles.text}>{description}</p>
      <button
        className={styles.btn}
        type="button"
        disabled={shouldDisableBtn}
        onClick={handleAddToFavoriteGames}
      >
        Add to favorite
      </button>

      <img
        className={styles.platformIcon}
        src={isPlatform8Bit ? icon8 : icon16}
        alt="console"
        width={120}
      />

      <SlickSlider items={gallery} title={title} />

      <Emulator romName={romName} isPlatform8Bit={isPlatform8Bit} />
    </div>
  );
};
