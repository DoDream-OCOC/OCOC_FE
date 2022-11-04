import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

import { gameSlice, signSlice } from './slices';

const rootReducer = combineReducers({
  game: gameSlice.reducer,
  sign: signSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['game', 'sign'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
