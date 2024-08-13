import styles from './Consoles.module.css';

export const Sega = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>The History of the Sega</h1>
      <section>
        <h2 className={styles.subtitle}>Creation and Early Development</h2>
        <h3 className={styles.subsubtitle}>Genesis of the Sega Genesis</h3>
        <p className={styles.text}>
          The Sega Genesis, known as the Mega Drive outside North America, was
          Sega's entry into the 16-bit console market. It was released in Japan
          in October 1988, North America in August 1989, and Europe in November
          1990. The console featured a Motorola 68000 CPU, providing superior
          graphics and sound compared to its 8-bit predecessors.
        </p>
        <h3 className={styles.subsubtitle}>Key Innovations</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.highlight}>
              Advanced Graphics and Sound:
            </span>
            The 16-bit architecture allowed for more detailed sprites,
            backgrounds, and more complex audio capabilities.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Backward Compatibility:</span> An
            adapter called the Power Base Converter allowed Sega Genesis to play
            Master System games, providing an extensive game library from the
            start.
          </li>
        </ul>
      </section>
      <section>
        <h2 className={styles.subtitle}>Development and Growth</h2>
        <h3 className={styles.subsubtitle}>Market Expansion</h3>
        <p className={styles.text}>
          The Sega Genesis was marketed aggressively, with a focus on older
          teens and young adults. Sega's marketing campaign included the famous
          slogan "Genesis does what Nintendon't," positioning the Genesis as a
          cooler, more mature alternative to the Super Nintendo.
        </p>
        <h3 className={styles.subsubtitle}>Iconic Games</h3>
        <p className={styles.text}>
          The Genesis library featured numerous groundbreaking titles, many of
          which became long-running franchises:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Sonic the Hedgehog (1991):</span>{' '}
            Sega's mascot, known for its speed and colorful graphics, became a
            major rival to Nintendo's Mario.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Streets of Rage (1991):</span> A
            beat 'em up series known for its cooperative gameplay and
            outstanding music.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Golden Axe (1989):</span> A
            fantasy-themed beat 'em up game that became a popular arcade port.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Phantasy Star IV (1993):</span>{' '}
            An RPG that showcased the Genesis's capabilities in storytelling and
            game design.
          </li>
        </ul>
        <h3 className={styles.subsubtitle}>
          Hardware and Peripheral Development
        </h3>
        <p className={styles.text}>
          The Genesis had several hardware revisions, including the Genesis 2
          and Genesis 3, which were more compact versions. Notable peripherals
          included the Sega CD (a CD-ROM drive add-on), the 32X (a hardware
          upgrade for 32-bit processing), and various controllers like the Sega
          Activator (a motion-sensing controller).
        </p>
      </section>
      <section>
        <h2 className={styles.subtitle}>Variants and Clones</h2>
        <h3 className={styles.subsubtitle}>Official Variants</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Genesis 2:</span> Released in
            1994, it was a smaller, more streamlined version of the original
            Genesis.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Genesis 3:</span> Released in
            1997, it was an even more compact version, though it lacked
            compatibility with the Sega CD and 32X add-ons.
          </li>
        </ul>
        <h3 className={styles.subsubtitle}>Add-ons</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.highlight}>Sega CD:</span> Released in 1991,
            this add-on used CD-ROM technology to offer games with enhanced
            graphics, audio, and full-motion video.
          </li>
          <li className={styles.listItem}>
            <span className={styles.highlight}>32X:</span> Released in 1994,
            this add-on provided additional processing power and 32-bit
            graphics, though it was poorly received due to a lack of quality
            games and its short lifespan.
          </li>
        </ul>
        <h3 className={styles.subsubtitle}>Pirate Clones</h3>
        <p className={styles.text}>
          Similar to the NES, the Genesis saw many unauthorized clones,
          especially in regions where the official console was not widely
          available.
        </p>
      </section>
      <section>
        <h2 className={styles.subtitle}>Decline and Legacy</h2>
        <h3 className={styles.subsubtitle}>Transition to 32-bit Consoles</h3>
        <p className={styles.text}>
          By the mid-1990s, the gaming industry began shifting to more powerful
          32-bit consoles, such as the Sony PlayStation and the Sega Saturn.
          Despite this, the Genesis continued to see new game releases and
          maintained a strong presence in the market until the late 1990s.
        </p>
        <h3 className={styles.subsubtitle}>Impact on Gaming</h3>
        <p className={styles.text}>
          The 16-bit era, particularly the Genesis, is often credited with
          pushing the boundaries of what home consoles could achieve in terms of
          graphics, sound, and game design. The console's success established
          Sega as a major player in the gaming industry, though its momentum
          waned with the subsequent launch of the Sega Saturn.
        </p>
        <h3 className={styles.subsubtitle}>Cultural Legacy</h3>
        <p className={styles.text}>
          The Genesis remains beloved by retro gaming enthusiasts, with many of
          its classic games being re-released on modern platforms. Sega's
          mascot, Sonic the Hedgehog, continues to be a significant cultural
          icon, appearing in games, movies, and various other media.
        </p>
      </section>
      <section>
        <h2 className={styles.subtitle}>Conclusion</h2>
        <p className={styles.text}>
          The 16-bit Sega Genesis era represents a crucial period in the
          evolution of video games. It was a time of technological advancement,
          fierce competition, and iconic game releases. The Genesis helped to
          define a generation of gamers and set the stage for many of the gaming
          conventions and franchises that continue to thrive today. Its legacy
          is preserved through emulation, re-releases, and the enduring
          popularity of its classic games.
        </p>
      </section>
    </article>
  );
};
