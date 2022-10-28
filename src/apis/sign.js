import ococ from './core';

const ROUTE = 'sign';

export const postJoinData = async ({ id, email, password }) => {
  await ococ.post(`/${ROUTE}/join`, { id, email, password }).then(res => console.log('sign up success'));
};

export const postLoginData = async ({ loginId, loginPassword }) => {
  await ococ.post(`/${ROUTE}/login`, { loginId, loginPassword }).then(res => {
    console.log('sign in success');
    return res;
  });
};
