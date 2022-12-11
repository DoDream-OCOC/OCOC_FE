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
  return await ococ.post(`/${ROUTE}/`, { score, speed: avrSpeed, studyId }).then(res => res.data.data);
};

/**
 * Get best score by set [9시반에 다시 작업 ㄱ]
 * @param {'TRV' | 'FOD' | 'BOK' | 'BUY'} setType
 * @returns
 */
export const getBestScoreBySet = async setType => {
  return await ococ.get(`/${ROUTE}/best/`, { setType });
};
