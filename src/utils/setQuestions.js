import store from '../store';
import { gameSlice } from '../store/slices';
import { question } from '../apis';

/**
 * Set questions by RTK. It will request API and dispatch corpus by case
 * [Todo] 이 것도 여기만 api 따로 뺀게 너무 이상. api폴더와 store 폴더 분리 후, store 폴더 안에 dispatchs 파일만들기
 * @param {*} studyId
 * @param {*} level
 */
export const setQuestions = async (studyId, level) => {
  if (level === 1) await question.getQuestion(studyId, level).then(res => store.dispatch(gameSlice.actions.setInitCorpus(res.data)));
  else await question.getQuestion(studyId, level).then(res => store.dispatch(gameSlice.actions.setExtraCorpus(res.data)));
};
