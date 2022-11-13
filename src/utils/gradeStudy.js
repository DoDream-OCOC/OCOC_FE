import store from '../store';
import { gameSlice } from '../store/slices';

/**
 * Grade study
 * @param {string} userAnswer
 * @param {string} answer
 * @param {string} datasetId
 * @return isCorrect boolean
 */
export const gradeStudy = async (userAnswer, answer, datasetId) => {
  setStudyResultInLS(userAnswer, datasetId);
  const isCrtAns = isCorrect(userAnswer, answer);
  isCrtAns || store.dispatch(gameSlice.actions.isNotCrtAnswer());
  return isCrtAns;
};

const isCorrect = (userAnswer, answer) => {
  return userAnswer === answer;
};

/**
 * Set study's result in local storage
 * @param {string} userAnswer
 * @param {boolean} isCorrect
 */
// [Todo] dispatch를 너무 다양한 곳에서 해주는 느낌이 나긴 함
const setStudyResultInLS = (userAnswer, datasetId) => {
  store.dispatch(
    gameSlice.actions.setStudyResult({
      results: {
        inputSentence: userAnswer,
        datasetId: datasetId,
      },
    }),
  );
};
