import ococ from './core';
import store from '../store';
import { signSlice } from '../store/slices';

const ROUTE = 'sign';

export const postJoinData = async ({ id, password }) => {
  await ococ.post(`/${ROUTE}/join`, { id, password }).then(res => res);
};

export const postLoginData = async ({ loginId, loginPassword }) => {
  await ococ.post(`/${ROUTE}/login`, { loginId, loginPassword }).then(res => {
    const X_AUTH_ACCESS_TOKEN = res.data.data.accessToken;
    const X_AUTH_REFRESH_TOKEN = res.data.data.refreshToken;
    store.dispatch(signSlice.actions.setToken({ X_AUTH_ACCESS_TOKEN, X_AUTH_REFRESH_TOKEN }));
    return res;
  });
};
