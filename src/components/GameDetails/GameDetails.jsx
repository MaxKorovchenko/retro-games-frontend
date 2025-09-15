import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as Arrow } from 'assets/image/svg/arrow.svg';

import { addToFavoriteGames } from 'myRedux/auth/operations';
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectUser,
} from 'myRedux/auth/selectors';
import { selectGames } from 'myRedux/games/selectors';
import { SlickSlider } from 'components/SlickSlider/SlickSlider';
import Emulator from 'components/Emulator/Emulator';

import cover8 from 'assets/image/cover8.jpg';
import icon8 from 'assets/image/icon8.png';
import icon16 from 'assets/image/icon16.png';

import styles from './GameDetails.module.css';

export const GameDetails = () => {
  const [showCheats, setShowCheats] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const { gameId } = useParams();
  const games = useSelector(selectGames);
  const { favoriteGames } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/');

  const selectedGame = games.find(game => game._id === gameId);

  if (!selectedGame) {
    return <Navigate to="/" />;
  }

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
    cheats = 'No cheats available',
  } = selectedGame;

  const shouldDisableBtn =
    !isLoggedIn || isLoading || favoriteGames.includes(gameId);

  const handleAddToFavoriteGames = () =>
    dispatch(addToFavoriteGames(gameId)).then(() => {
      toast.success(`${title} was successfully added to your favorites`);
    });

  const isPlatform8Bit = platform === '8-bit';
  const platformClass = isPlatform8Bit ? styles.dendy : styles.sega;

  const toggleCheatsBtn = () => {
    setShowCheats(prevState => !prevState);
  };

  return (
    <div className={`${styles.container} ${platformClass}`}>
      <Link to={backLinkRef.current} className={styles.backLink}>
        <Arrow className={styles.arrow} /> Go Back
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
          <p className={styles.text}>
            <span className={styles.highlight}>Genre:</span> {genre}
          </p>
          <p className={styles.text}>
            <span className={styles.highlight}>Number of Players:</span>{' '}
            {numberOfPlayers}
          </p>
          <p className={styles.text}>
            <span className={styles.highlight}>Release Year: </span>
            {releaseYear}
          </p>
        </div>
      </div>

      <p className={styles.text}>{description}</p>
      <button
        className={styles.addBtn}
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

      <button className={styles.cheatsBtn} onClick={toggleCheatsBtn}>
        {showCheats ? 'Hide' : 'Show'} codes and cheats
      </button>

      {showCheats && <pre className={styles.cheats}>{cheats}</pre>}
    </div>
  );
};
