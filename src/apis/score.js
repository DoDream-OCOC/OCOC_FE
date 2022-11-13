import ococ from './core';

const ROUTE = 'score';

/**
 * Post score. get average speed & final score
 * @param {number} score 최종 점수
 * @param {number} avrSpeed 평균 속도
 * @param {number} studyId 문제 Id
 * @response { bestScore, diffValue, newRecord, score, topPercent }
 */
export const postScore = async (score, avrSpeed, studyId) => {
  return await ococ.post(`/${ROUTE}/`, { score, avrSpeed, studyId });
};
