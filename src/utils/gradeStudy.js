import store from '../store';
import { studySlice } from '../store/slices/study';

/**
 * Grade study
 * @param {string} userAnswer
 * @param {string} answer
 * @return boolean
 */
export const gradeStudy = (userAnswer, answer, studyId) => {
  const isCorrect = userAnswer === answer;
  setStudyResultInLS(userAnswer, studyId);
  return isCorrect;
};

/**
 * Set study's result in local storage
 * @param {string} userAnswer
 * @param {boolean} isCorrect
 */
// [Todo] dispatch를 너무 다양한 곳에서 해주는 느낌이 나긴 함
const setStudyResultInLS = (userAnswer, studyId) => {
  store.dispatch(
    studySlice.actions.setStudyResult({
      results: {
        inputSentence: userAnswer,
        datasetId: studyId,
      },
    }),
  );
};
