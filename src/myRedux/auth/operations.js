import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (crd, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/register', crd);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (crd, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/login', crd);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/api/auth/logout');

      clearToken();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'auth/refreshUser',
//   async (_, { getState, rejectWithValue }) => {
//     const { token } = getState().auth;

//     if (!token) return rejectWithValue('Unable to fetch user');

//     try {
//       setToken(token);
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
