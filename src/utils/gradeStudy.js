import store from '../store';
import { studySlice } from '../store/slices/study';

/**
 * Grade study
 * @param {string} userAnswer
 * @param {string} answer
 * @param {string} datasetId
 * @return isCorrect boolean
 */
export const gradeStudy = (userAnswer, answer, datasetId) => {
  setStudyResultInLS(userAnswer, datasetId);
  return isCorrect(userAnswer, answer);
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
    studySlice.actions.setStudyResult({
      results: {
        inputSentence: userAnswer,
        datasetId: datasetId,
      },
    }),
  );
};
