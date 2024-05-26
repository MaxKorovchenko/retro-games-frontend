import { createSlice } from '@reduxjs/toolkit';

import {
  addToFavoriteGames,
  login,
  logout,
  refreshUser,
  register,
  removeFromFavoriteGames,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logout.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(addToFavoriteGames.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToFavoriteGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(addToFavoriteGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.favoriteGames = action.payload.favoriteGames;
      })

      .addCase(removeFromFavoriteGames.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeFromFavoriteGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(removeFromFavoriteGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.favoriteGames = action.payload.favoriteGames;
      });
  },
});

export const authReducer = authSlice.reducer;
