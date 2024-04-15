import axios from 'axios';
import { useEffect, useState } from 'react';

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'https://retro-games-backend.onrender.com';

axios.defaults.baseURL = URL;

export const EightBitGames = () => {
  const [games, setGames] = useState([]);

  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.get('/api/games');
      console.log(data);
      setGames(data);
    };

    fetchGames();
  }, []);

  return (
    <ul>
      {games.map(({ _id, title }) => (
        <li key={_id}>{title}</li>
      ))}
    </ul>
  );
};
