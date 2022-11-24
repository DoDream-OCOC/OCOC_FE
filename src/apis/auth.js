import ococ from './core';

const ROUTE = 'auth';

export const postRefreshToken = async ({ refreshToken }) => {
  await ococ.post(`/${ROUTE}/refresh`, { headers: { refreshToken } }).then(res => {
    console.log(res);
    return res;
  });
};
