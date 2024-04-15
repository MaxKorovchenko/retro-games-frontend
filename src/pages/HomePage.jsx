import { Platforms } from 'components/Platforms/Platforms';

const HomePage = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'aliceblue', padding: 100 }}>
        Welcome Retro Gamer
      </h1>

      <Platforms />
    </>
  );
};

export default HomePage;
