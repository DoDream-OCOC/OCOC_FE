import store from '../store';
import { gameSlice } from '../store/slices';
import { question } from '../apis';

export const setQuestions = async (studyId, level) => {
  if (level === 1) await question.getQuestion(studyId, level).then(res => store.dispatch(gameSlice.actions.setInitCorpus(res.data)));
  else await question.getQuestion(studyId, level).then(res => store.dispatch(gameSlice.actions.setExtraCorpus(res.data)));
};
