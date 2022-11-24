import axios from 'axios';
import { auth } from '..';
import store from '../../store';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ococ = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: BASE_URL,
});
const TOKEN_EXPIRED = 'ERROR_0005';

ococ.interceptors.request.use(
  config => {
    const X_AUTH_ACCESS_TOKEN = store.getState().sign.X_AUTH_ACCESS_TOKEN || null;
    const X_AUTH_REFRESH_TOKEN = store.getState().sign.X_AUTH_REFRESH_TOKEN || null;
    // [Temp] 토큰을 담아서 보내지 않을 때 -> 비회원 로직
    if (config.url === '/sign-in') return config;
    else {
      return {
        ...config,
        headers: {
          'X-AUTH-ACCESS-TOKEN': !!X_AUTH_ACCESS_TOKEN && 'Bearer ' + X_AUTH_ACCESS_TOKEN,
          'X-AUTH-REFRESH-TOKEN': !!X_AUTH_REFRESH_TOKEN && 'Bearer ' + X_AUTH_REFRESH_TOKEN,
        },
      };
    }
  },
  error => error,
);

ococ.interceptors.response.use(
  response => {
    console.log(response);
  },
  // 여기 찍어봐야 알것같음
  async error => {
    const { config, response } = error;

    console.log('URL:', config.url);
    console.log('Status:', response.status);
    console.log('Authorization:', config.headers.authorization);
    console.log('msg:', response.data.message);

    if (response?.errorResponse.code === TOKEN_EXPIRED) {
      const refreshToken = localStorage.getItem('refreshToken') || null;
      refreshToken === null && window.location.replace('/sign-in');
      await auth.postRefreshToken(`Bearer ${store.getState().sign.X_AUTH_REFRESH_TOKEN}`);
    }

    return Promise.reject(error);
  },
);

export default ococ;
