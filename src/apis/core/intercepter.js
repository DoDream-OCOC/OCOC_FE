import ococ from '.';
import store from '../../store';

ococ.interceptors.request.use(
  config => {
    // [Temp] 토큰을 담아서 보내지 않을 때 -> 비회원 로직
    if (config.url === '') {
      return config;
    } else {
      return {
        ...config,
        headers: {
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
  async error => {
    const {
      config,
      response: { status, data },
    } = error;

    console.log('URL:', config.url);
    console.log('Status:', status);
    console.log('Authorization:', config.headers.authorization);
    console.log('msg:', data.message);

    return Promise.reject(error);
  },
);
