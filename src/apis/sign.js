import ococ from './core';
// import store from '../store';
// import { studySlice } from '../store/slices/study';

const ROUTE = 'sign';

export const postJoinData = async (id, email, password) => {
  await ococ.post(`/${ROUTE}/join`, { id, email, password }).then(res => console.log('sign up success'));
};

export const postLoginData = async (loginId, loginPassword) => {
  // Header에서 넘겨주실 예정
  await ococ.post(`/${ROUTE}/login`, { loginId, loginPassword }).then(res => console.log('sign in success'));
};
