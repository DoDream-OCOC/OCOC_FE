import store from '../store';
import { studySlice } from '../store/slices/study';

/**
 * Grade study
 * @param {string} userAnswer
 * @param {string} answer
 */
export const gradeStudy = (userAnswer, answer) => {
  const isCorrect = userAnswer === answer;
  setStudyResultInLS(userAnswer, answer, isCorrect);
};

/**
 * Set study's result in local storage
 * @param {string} userAnswer
 * @param {boolean} isCorrect
 */
const setStudyResultInLS = (userAnswer, isCorrect) => {
  store.dispatch(
    studySlice.actions.setStudyResult({
      answerList: {
        resultSentence: userAnswer,
        correct: isCorrect,
      },
    }),
  );
};
