import ococ from './core';

const ROUTE = 'info';

export const getCurGameSet = async () => {
  await ococ.get(`/${ROUTE}/set`).then(res => res);
};
