import axios from 'axios';
import { useEffect, useState } from 'react';

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'https://retro-games-backend.onrender.com';

axios.defaults.baseURL = URL;

export const EightBitGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.get('/api/games');
      setGames(data);
    };

    fetchGames();
  }, []);

  const eightBitGames = games.filter(game => game.platform === '8-bit');

  return (
    <ul>
      {eightBitGames.map(({ _id, title }) => (
        <li key={_id}>{title}</li>
      ))}
    </ul>
  );
};
