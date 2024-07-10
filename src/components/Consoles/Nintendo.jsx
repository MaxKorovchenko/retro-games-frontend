import styles from './Consoles.module.css';

export const Nintendo = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>The History of the NES</h1>
      <section>
        <h2 className={styles.subtitle}>Creation and Early Development</h2>
        <h3 className={styles.subtitle}>The Dawn of 8-bit Consoles</h3>
        <p className={styles.text}>
          The era of 8-bit consoles began with the release of the Nintendo
          Entertainment System (NES) in 1983, originally launched as the Family
          Computer (Famicom) in Japan. Developed by Nintendo, the NES/Famicom
          used an 8-bit microprocessor, the Ricoh 2A03, which allowed for more
          complex graphics and sound than earlier consoles. The console was a
          significant leap forward in home entertainment, featuring a wide
          variety of games that appealed to a broad audience.
        </p>
        <h3 className={styles.subtitle}>Key Innovations</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Cartridge-Based Games:</span> The
            NES utilized interchangeable cartridges, allowing for a vast library
            of games and reducing the risk of hardware obsolescence.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Controller Design:</span> The NES
            controller introduced the now-standard directional pad (D-pad) and
            A/B buttons, which offered more precise control compared to earlier
            joysticks.
          </li>
        </ul>
      </section>
      <section>
        <h2 className={styles.subtitle}>Development and Growth</h2>
        <h3 className={styles.subtitle}>Market Expansion</h3>
        <p className={styles.text}>
          After its Japanese release, the NES launched in North America in 1985,
          helping to revive the video game industry after the crash of 1983. The
          NES quickly became a household staple, with marketing strategies that
          included bundling the console with popular games like Super Mario
          Bros. and Duck Hunt.
        </p>
        <h3 className={styles.subtitle}>Iconic Games</h3>
        <p className={styles.text}>
          The NES library featured numerous groundbreaking titles, many of which
          became long-running franchises:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Super Mario Bros. (1985):</span>{' '}
            Defined platform gaming and became one of the best-selling games of
            all time.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>
              The Legend of Zelda (1986):
            </span>{' '}
            Introduced open-world exploration and non-linear gameplay.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Metroid (1986):</span> Blended
            action and exploration in a science fiction setting.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Mega Man (1987):</span> Known for
            its challenging gameplay and unique boss fights.
          </li>
        </ul>
        <h3 className={styles.subtitle}>Hardware and Peripheral Development</h3>
        <p className={styles.text}>
          The NES had several hardware revisions, including the NES-101 (a
          redesigned, more compact version). Notable peripherals included the
          Zapper light gun, R.O.B. (Robotic Operating Buddy), and the Power
          Glove.
        </p>
      </section>
      <section>
        <h2 className={styles.subtitle}>Variants and Clones</h2>
        <h3 className={styles.subtitle}>Famicom Variants</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Family Computer (Famicom):</span>{' '}
            The original Japanese version, featuring a red and white design and
            hardwired controllers.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Famicom Disk System:</span> An
            add-on that used floppy disks, allowing for larger and more complex
            games.
          </li>
        </ul>
        <h3 className={styles.subtitle}>NES Variants</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.highlight}>NES-101 (Top Loader):</span> A
            redesigned, more compact version of the NES, released in 1993.
          </li>
        </ul>
        <h3 className={styles.subtitle}>Pirate Clones</h3>
        <p className={styles.text}>
          Many unauthorized clones of the NES were produced, especially in
          regions where the original console was not officially available. These
          clones often featured built-in games and were marketed under various
          names, like Dendy in Russia.
        </p>
      </section>
      <section>
        <h2 className={styles.subtitle}>Decline and Legacy</h2>
        <h3 className={styles.subtitle}>Transition to 16-bit Consoles</h3>
        <p className={styles.text}>
          By the early 1990s, the gaming industry began shifting to more
          powerful 16-bit consoles, such as the Super Nintendo Entertainment
          System (SNES) and the Sega Genesis. Despite this, the NES continued to
          see new game releases and maintained a strong presence in the market
          until the mid-1990s.
        </p>
        <h3 className={styles.subtitle}>Impact on Gaming</h3>
        <p className={styles.text}>
          The 8-bit era laid the foundation for many modern gaming conventions,
          including game design, storytelling, and genre development. Many
          iconic franchises that started on the NES, such as Mario, Zelda, and
          Final Fantasy, continue to thrive on modern consoles.
        </p>
        <h3 className={styles.subtitle}>Cultural Legacy</h3>
        <p className={styles.text}>
          The NES is often credited with saving the video game industry after
          the crash of 1983 and establishing Nintendo as a dominant force in the
          gaming world. Retro gaming communities continue to celebrate the NES,
          with emulation and re-releases on modern platforms keeping the
          console's spirit alive.
        </p>
      </section>
      <section>
        <h2 className={styles.subtitle}>Conclusion</h2>
        <p className={styles.text}>
          The 8-bit console era, epitomized by the NES and its various clones
          and derivatives, represents a pivotal period in video game history. It
          was a time of innovation, iconic games, and the establishment of many
          beloved gaming franchises. The NES's impact is still felt today, as it
          set the standards for console gaming and left an indelible mark on the
          entertainment industry.
        </p>
      </section>
    </article>
  );
};
