import ococ from './core';

const ROUTE = 'info';

export const getCurGameSet = async () => {
  return await ococ.get(`/${ROUTE}/set`).then(res => res.data.data);
};
