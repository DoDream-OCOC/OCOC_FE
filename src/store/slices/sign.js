import { createSlice } from '@reduxjs/toolkit';
import { signInitialState } from '../initialStates';

export const signSlice = createSlice({
  name: 'signSlice',

  initialState: signInitialState,
  reducers: {
    setToken(state, action) {
      state.X_AUTH_ACCESS_TOKEN = action.payload.X_AUTH_ACCESS_TOKEN;
      state.X_AUTH_REFRESH_TOKEN = action.payload.X_AUTH_REFRESH_TOKEN;
    },
    setAccessToken(state, action) {
      state.X_AUTH_ACCESS_TOKEN = action.payload.X_AUTH_ACCESS_TOKEN;
    },
    clearToken(state, _) {
      state.X_AUTH_ACCESS_TOKEN = signInitialState.X_AUTH_ACCESS_TOKEN;
      state.X_AUTH_REFRESH_TOKEN = signInitialState.X_AUTH_REFRESH_TOKEN;
    },
  },
});
