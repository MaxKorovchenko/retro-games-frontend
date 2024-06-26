import { useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// import icon16 from 'assets/image/icon16.png';

const Emulator = ({ romName, isPlatform8Bit }) => {
  const emulatorRef = useRef(null);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyAMNoqZgA2HNQ09fIHeHgL19rdz8_c2lbw',
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
        console.log('File available at', url);
        return url;
      } catch (error) {
        console.error('Error getting file URL:', error);
      }
    }

    getROMUrl(romName).then(url => {
      window.gameUrl = url;
      console.log('Game URL:', window.gameUrl);

      window.NepPlayer = '#emu';
      window.NepEmu = `${isPlatform8Bit ? 'nes' : 'sega'}`;
      console.log(window.NepEmu);
      window.NepZoom = 'enable';
      window.NepMaxWidth = '1100px';
      window.NepLang = 'en';
      window.gameUrl = url;

      const script = document.createElement('script');
      script.src = 'https://mem.neptunjs.com/njs/njsLoader.js';
      script.type = 'text/javascript';
      document.head.appendChild(script);
    });
  }, [romName, isPlatform8Bit]);

  return <div id="emu" ref={emulatorRef}></div>;
};

export default Emulator;
