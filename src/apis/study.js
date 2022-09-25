import ococ from './core';
import store from '../store';
import { studySlice } from '../store/slices/study';

const ROUTE = 'study';

export const sendStudyType = async (level, studyType = 'click') => {
  await ococ.post(`/${ROUTE}`, { level, studyType }).then(res => {
    // [Todo] store를 아예 빼주고 page마다 mutation부분을 빼주자
    store.dispatch(studySlice.actions.setAllCorpus({ datasets: res.data.data.datasets }));
    return res;
  });
};

export const sendStudyResult = async (answerList, answer) => {
  await ococ.post(`/${ROUTE}/result`, { answerList, answer }).then(res => {
    // [Todo] 단순 결과 제출 작업만 수행
  });
};
