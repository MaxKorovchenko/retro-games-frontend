import { useParams } from 'react-router-dom';

export const GameDetails = () => {
  const { gameId } = useParams();
  console.log(gameId);

  return <div>GameDetails</div>;
};
