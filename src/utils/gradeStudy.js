import store from '../store';
import { studySlice } from '../store/slices/study';

/**
 * Grade study
 * @param {string[]} questionArray
 * @param {string} answer
 */
export const gradeStudy = (questionArray, answer) => {
  const question = arrayToString(questionArray);
  const isCorrect = question === answer;
  setStudyResultInLS(question, answer, isCorrect);
};

/**
 * Replace string array to string
 * @param {string[]} stringArray
 * @returns
 */
const arrayToString = stringArray => {
  return stringArray.join(' ');
};

/**
 * Set study's result in local storage
 * @param {string} question
 * @param {boolean} isCorrect
 */
const setStudyResultInLS = (question, isCorrect) => {
  store.dispatch(
    studySlice.actions.setStudyResult({
      answerList: {
        resultSentence: question,
        correct: isCorrect,
      },
    }),
  );
};
