import ococ from '.';

ococ.interceptors.request.use(
  config => config,
  error => error,
);

ococ.interceptors.response.use(
  response => response,
  async error => {
    return Promise.reject(error);
  },
);
