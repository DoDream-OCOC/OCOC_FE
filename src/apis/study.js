import ococ from './core';

const ROUTE = 'study';

// [Temp]  studyType = 'click'
export const sendStudyType = async (level, studyType = 'click') => {
  await ococ.post(`/${ROUTE}`, { level, studyType }).then(res => {
    // [Todo] 로컬스토리지에 값들 저장
    // 라우터 이동 추가 -> 다른 곳에서 수행하는 게 맞을 듯
  });
};

export const sendStudyResult = async (answerList, answer) => {
  await ococ.post(`/${ROUTE}/result`, { answerList, answer }).then(res => {
    // [Todo] 단순 결과 제출 작업만 수행
  });
};
