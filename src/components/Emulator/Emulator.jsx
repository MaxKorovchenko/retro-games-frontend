import { useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import emuCover from 'assets/image/emu/emuCover.webp';

import styles from './Emulator.module.css';

const Emulator = ({ romName, isPlatform8Bit }) => {
  const emulatorRef = useRef(null);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyAMNoqZgA4HNQ09fIHeHgL19rdz8_c2lbw',
      authDomain: 'retro-games-1985.firebaseapp.com',
      projectId: 'retro-games-1985',
      storageBucket: 'retro-games-1985.appspot.com',
      messagingSenderId: '852677305485',
      appId: '1:852677305485:web:132b6125144e4134e82ec4',
      measurementId: 'G-J49EY47GJT',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    async function getROMUrl(fileName) {
      const storageRef = ref(
        storage,
        `roms/${isPlatform8Bit ? '8-bit' : '16-bit'}/` + fileName
      );
      try {
        const url = await getDownloadURL(storageRef);
        return url;
      } catch (error) {
        console.error('Error getting file URL:', error);
      }
    }

    getROMUrl(romName).then(url => {
      window.gameUrl = url;
      window.NepPlayer = '#emu';
      window.NepEmu = `${isPlatform8Bit ? 'nes' : 'sega'}`;
      window.NepZoom = 'enable';
      window.NepMaxWidth = '1100px';
      window.NepLang = 'en';
      window.boxartimg = `<img src="${emuCover}" alt="emu cover" style=" width: 100%; height: auto; " />`;

      const script = document.createElement('script');
      script.src = 'https://mem.neptunjs.com/njs/njsLoader.js';
      script.type = 'text/javascript';
      document.head.appendChild(script);
    });
  }, [romName, isPlatform8Bit]);

  return <div className={styles.emu} id="emu" ref={emulatorRef}></div>;
};

export default Emulator;
