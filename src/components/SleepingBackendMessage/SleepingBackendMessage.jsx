import { useEffect, useRef, useState } from 'react';

import rr from 'assets/image/sleeping-back/rr.webp';
import sonic from 'assets/image/sleeping-back/sonic.webp';
import jim from 'assets/image/sleeping-back/jim.webp';
import cool from 'assets/image/sleeping-back/cool.webp';

import dd from 'assets/image/sleeping-back/darkwing-duck.webp';
import mario from 'assets/image/sleeping-back/mario.webp';
import chipDale from 'assets/image/sleeping-back/chip-dale.webp';
import flinstones from 'assets/image/sleeping-back/flinstones.webp';
import speakerOn from 'assets/image/svg/speaker-on-icon.svg';
import speakerOff from 'assets/image/svg/speaker-off-icon.svg';
import soundTrack from 'assets/audio/background-music.mp3';

import styles from './SleepingBackendMessage.module.css';

const images16 = [rr, sonic, jim, cool];
const images8 = [dd, mario, chipDale, flinstones];

export const SleepingBackendMessage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      isMuted ? audioRef.current.pause() : audioRef.current.play();
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prevIsMuted => !prevIsMuted);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <audio ref={audioRef} src={soundTrack} loop />
        <button
          onClick={toggleMute}
          className={styles.audioToggle}
          aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
        >
          <img
            src={isMuted ? speakerOff : speakerOn}
            alt=""
            className={styles.audioIcon}
          />
        </button>

        {images16.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`cartoon ${index + 1}`}
            className={`${styles.animatedImage16} ${styles[`delay${index}`]}`}
          />
        ))}

        <p className={styles.message}>
          The backend is currently sleeping. The application will start in 1
          minute.
        </p>

        {images8.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`cartoon ${index + 1}`}
            className={`${styles.animatedImage8} ${styles[`delay${index}`]}`}
          />
        ))}
      </div>
    </div>
  );
};
