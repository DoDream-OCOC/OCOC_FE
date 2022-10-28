import ococ from './core';

const ROUTE = 'sign';

export const postJoinData = async (id, email, password) => {
  await ococ.post(`/${ROUTE}/join`, { id, email, password }).then(res => console.log('sign up success'));
};

export const postLoginData = async (loginId, loginPassword) => {
  // [Todo] Header에 받아서 localStorage에 담기
  await ococ.post(`/${ROUTE}/login`, { loginId, loginPassword }).then(res => console.log('sign in success'));
};
