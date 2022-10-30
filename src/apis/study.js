import ococ from './core';

const ROUTE = 'study';

export const postStudyType = async (level, studyType = 'click') => {
  return await ococ.post(`/${ROUTE}`, { level, studyType });
};

export const sendStudyResult = async (results, studyId) => {
  await ococ.post(`/${ROUTE}/result`, { results, studyId });
};
