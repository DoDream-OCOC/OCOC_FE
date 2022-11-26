import axios from 'axios';
import store from '../../store';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ococ = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: BASE_URL,
});
ococ.interceptors.request.use(
  config => {
    const X_AUTH_ACCESS_TOKEN = store.getState().sign.X_AUTH_ACCESS_TOKEN || null;
    const X_AUTH_REFRESH_TOKEN = store.getState().sign.X_AUTH_REFRESH_TOKEN || null;
    if (config.url === '/sign-in') return config;
    else {
      return {
        ...config,
        headers: {
          'X-AUTH-ACCESS-TOKEN': !!X_AUTH_ACCESS_TOKEN && `Bearer ${X_AUTH_ACCESS_TOKEN}`,
          'X-AUTH-REFRESH-TOKEN': !!X_AUTH_REFRESH_TOKEN && `Bearer ${X_AUTH_REFRESH_TOKEN}`,
        },
      };
    }
  },
  error => error,
);

ococ.interceptors.response.use(
  response => response,
  async error => {
    console.log('err:', error);

    // [Temp] 재발급 보류
    // if (error?.errorResponse.code === TOKEN_EXPIRED) {
    //   const X_AUTH_REFRESH_TOKEN = store.getState().sign.X_AUTH_REFRESH_TOKEN || null;
    //   X_AUTH_REFRESH_TOKEN === null && window.location.replace('/sign-in');
    //   await auth.postRefreshToken(`Bearer ${X_AUTH_REFRESH_TOKEN}`);
    // }

    return Promise.reject(error);
  },
);

export default ococ;
