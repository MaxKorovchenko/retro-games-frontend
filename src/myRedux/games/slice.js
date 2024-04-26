import { createSlice } from '@reduxjs/toolkit';
import { getAllGames } from './operations';

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllGames.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      }),
});

export const gamesReducer = gamesSlice.reducer;
