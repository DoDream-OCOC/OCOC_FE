import ococ from './core';
// import store from '../store';
// import { studySlice } from '../store/slices/study';

const ROUTE = 'sign';

export const postJoinData = async (id, email, password) => {
  await ococ.post(`/${ROUTE}/join`, { id, email, password });
};

export const postLoginData = async (loginId, loginPassword) => {
  await ococ.post(`/${ROUTE}/login`, { loginId, loginPassword });
};
