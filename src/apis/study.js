import ococ from './core';

const ROUTE = 'study';

export const sendStudyType = async (level, studyType) => {
  await ococ.post(`/${ROUTE}`, { level, studyType }).then(res => {
    return res;
  });
};

export const sendStudyResult = async (answerList, answer) => {
  await ococ.post(`/${ROUTE}/result`, { answerList, answer }).then(res => {
    // [Todo] 단순 결과 제출 작업만 수행
  });
};
