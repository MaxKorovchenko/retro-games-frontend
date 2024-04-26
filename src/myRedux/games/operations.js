import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllGames = createAsyncThunk(
  'games/getAllGames',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/games');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
