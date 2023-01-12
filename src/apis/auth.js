import ococ from './core';
import store from '../store';
import { signSlice } from '../store/slices';

const ROUTE = 'auth';

export const postRefreshToken = async () => {
  await ococ.post(`/${ROUTE}/refresh`).then(res => {
    store.dispatch(
      signSlice.actions.setAccessToken({
        X_AUTH_ACCESS_TOKEN: res.data.data.accessToken,
      }),
    );
    return res;
  });
};
