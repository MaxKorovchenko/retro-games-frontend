import { Platforms } from 'components/Platforms/Platforms';

const title = {
  padding: 100,
  textAlign: 'center',
  color: 'aliceblue',
  fontFamily: '"Press Start 2P", cursive',
};
const HomePage = () => {
  return (
    <>
      <h1 style={title}>Welcome Retro Gamer!</h1>

      <Platforms />
    </>
  );
};

export default HomePage;
