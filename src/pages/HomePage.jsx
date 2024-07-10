import { useState } from 'react';

import { Platforms } from 'components/Platforms/Platforms';
import { Nintendo } from 'components/Consoles/Nintendo';
import { Sega } from 'components/Consoles/Sega';

import styles from './HomePage.module.css';

const HomePage = () => {
  const [selectedConsole, setSelectedConsole] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        Welcome Retro Gamer! Choose your console
      </h1>

      <Platforms onChoose={setSelectedConsole} />

      {selectedConsole === 'Nintendo' && <Nintendo />}
      {selectedConsole === 'Sega' && <Sega />}
    </div>
  );
};

export default HomePage;
