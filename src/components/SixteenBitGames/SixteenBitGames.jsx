import axios from 'axios';
import { useEffect, useState } from 'react';

export const SixteenBitGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.get('/api/games');
      setGames(data);
    };

    fetchGames();
  }, []);

  const SixteenBitGames = games.filter(game => game.platform === '16-bit');

  return (
    <ul>
      {SixteenBitGames.map(({ _id, title }) => (
        <li key={_id}>{title}</li>
      ))}
    </ul>
  );
};
