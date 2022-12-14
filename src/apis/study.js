import ococ from './core';

const ROUTE = 'study';

/**
 * @param {'TRV' | 'FOD' | 'BOK' | 'BUY'} setType
 * @response studyId
 */
export const postStudy = async ({ setType = 'TRV' }) => {
  console.log(setType);
  return await ococ.post(`/${ROUTE}`, { setType }).then(res => res);
};
