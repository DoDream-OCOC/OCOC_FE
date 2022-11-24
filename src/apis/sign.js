import ococ from './core';

const ROUTE = 'sign';

export const postJoinData = async ({ id, password }) => {
  await ococ.post(`/${ROUTE}/join`, { id, password }).then(res => console.log(res));
};

export const postLoginData = async ({ loginId, loginPassword }) => {
  await ococ.post(`/${ROUTE}/login`, { loginId, loginPassword }).then(res => {
    console.log(res);
    return res;
  });
};

export const postRefreshToken = async ({ refreshToken }) => {
  await ococ.post(`/${ROUTE}/refresh`, { headers: { refreshToken } }).then(res => {
    console.log('reissue token success');
    return res;
  });
};
