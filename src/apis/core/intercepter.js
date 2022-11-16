import ococ from '.';
import { auth } from '..';
import store from '../../store';

const TOKEN_EXPIRED = 'ERROR_0005';

ococ.interceptors.request.use(
  config => {
    // [Temp] 토큰을 담아서 보내지 않을 때 -> 비회원 로직
    if (config.url === '') return config;
    else {
      return {
        ...config,
        headers: {
          // [Todo] 명세보고, 여기 이름 바뀌었나 확인하기
          X_AUTH_ACCESS_TOKEN: 'Bearer ' + store.getState().sign.X_AUTH_ACCESS_TOKEN || null,
          X_AUTH_REFRESH_TOKEN: 'Bearer ' + store.getState().sign.X_AUTH_REFRESH_TOKEN || null,
        },
      };
    }
  },
  error => error,
);

ococ.interceptors.response.use(
  response => response,
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
