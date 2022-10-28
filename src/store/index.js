import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

import { studySlice, signSlice } from './slices';

const rootReducer = combineReducers({
  study: studySlice.reducer,
  sign: signSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['study', 'sign'],
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
