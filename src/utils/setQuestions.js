import store from '../store';
import { gameSlice } from '../store/slices';
import { question } from '../apis';

/**
 * Set questions by RTK. It will request API and dispatch corpus by case
 * @param {*} studyId
 * @param {*} level
 */
export const setQuestions = async (studyId, level) => {
  if (level === 1) await question.getQuestion(studyId, level).then(res => store.dispatch(gameSlice.actions.setInitCorpus(res.data)));
  // else await question.getQuestion(studyId, level).then(res => store.dispatch(gameSlice.actions.setExtraCorpus(res.data)));
  else
    await question.getQuestion(studyId, level).then(res => {
      store.dispatch(gameSlice.actions.setExtraCorpus(res.data));
      console.log('isNextLvl : ', res.data);
    });
};
