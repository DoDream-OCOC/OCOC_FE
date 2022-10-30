import ococ from './core';

const ROUTE = 'question';

/**
 * Get question
 * @param {number} studyId 학습의 고유 ID
 * @param { 1 | 2 | 3 } level 문제의 단계
 * @response { id, questionType, korean, english, clause, words, blankIndex }
 */
export const getQuestion = async (studyId, level) => {
  return await ococ.post(`/${ROUTE}/${studyId}?level=${level}`);
};
