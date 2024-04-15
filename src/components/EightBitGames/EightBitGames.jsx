import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const EightBitGames = () => {
  const [games, setGames] = useState([]);

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
