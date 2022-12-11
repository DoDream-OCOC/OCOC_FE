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
 * Get best score by set
 * @param {'TRV' | 'FOD' | 'BOK' | 'BUY'} setType
 */
export const getBestScoreBySet = async setType => {
  return await ococ.get(`/${ROUTE}/best?setType=${setType}`).then(res => res.data.data);
};

/**
 * Get rank by set
 * @param {'TRV' | 'FOD' | 'BOK' | 'BUY'} setType
 */
export const getScoreRank = async setType => {
  return ococ.get(`/${ROUTE}/rank`, { setType });
};

/**
 * Get speed by set
 * @param {'TRV' | 'FOD' | 'BOK' | 'BUY'} setType
 */
export const getScoreSpeed = async setType => {
  return ococ.get(`/${ROUTE}/speed`, { setType });
};
