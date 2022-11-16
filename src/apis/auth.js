import ococ from './core';
import store from '../store';

const ROUTE = 'auth';

export const postJoinData = async ({ id, email, password }) => {
  await ococ.post(`/${ROUTE}/join`, { id, email, password }).then(res => console.log('sign up success'));
};

export const postLoginData = async ({ loginId, loginPassword }) => {
  await ococ.post(`/${ROUTE}/login`, { loginId, loginPassword }).then(res => {
    console.log('sign in success');
    return res;
  });
};

export const postRefreshToken = async () => {
  await ococ.post(`/${ROUTE}/refresh`, { headers: { refreshToken: store.getState().sign.X_AUTH_REFRESH_TOKEN } }).then(res => {
    console.log('reissue token success');
    return res;
  });
};
