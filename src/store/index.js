import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

import { studySlice } from './slices/study';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['study'],
};

const rootReducer = combineReducers({
  study: studySlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
