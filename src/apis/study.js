import ococ from './core';

const ROUTE = 'study';

/**
 * @response studyId
 */
export const postStudy = async () => {
  return await ococ.post(`/${ROUTE}`);
};
