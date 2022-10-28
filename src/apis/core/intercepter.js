import ococ from '.';

// [Temp]
const TOKEN_EXPIRED = 499;

ococ.interceptors.request.use(
  config => {
    // [Temp] 토큰을 담아서 보내지 않을 때
    if (config.url === '') {
      return config;
    } else {
      return {
        ...config,
        headers: {
          // [Temp] 따로 전역관리 안하면 그냥 로컬에서/세션에서 가져옴
          // [Todo] 비회원일경우 null로 주기
          X_AUTH_ACCESS_TOKEN: localStorage.getItem('accessToken') || null,
          X_AUTH_REFRESH_TOKEN: localStorage.getItem('refreshToken') || null,
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

    if (status === TOKEN_EXPIRED) {
      // [Todo] 토큰 재발급 처리
    }

    return Promise.reject(error);
  },
);
