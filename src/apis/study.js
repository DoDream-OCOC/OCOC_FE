import ococ from './core';
import store from '../store';
import { studySlice } from '../store/slices/study';

const ROUTE = 'study';

export const sendStudyType = async (level, studyType = 'click') => {
  await ococ.post(`/${ROUTE}`, { level, studyType }).then(res => {
    store.dispatch(studySlice.actions.setAllCorpus({ wordsObj: res.data.wordsObj }));
    return res;
  });
};

export const sendStudyResult = async (answerList, answer) => {
  await ococ.post(`/${ROUTE}/result`, { answerList, answer }).then(res => {
    // [Todo] 단순 결과 제출 작업만 수행
  });
};
