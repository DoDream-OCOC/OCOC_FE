import React from 'react';
import useTimerUI from '../timer/useTimerUI';
import { PointEarnedUI as PEUI } from '../../components/PointEarnedUI';
/**
 * useGradedUI hook
 * @prop level
 * @returns isCrtAns, isGrading, stageRes, showGradedUI, TimerUI, PointEarnedUI
 */
function useGradedUI({ level }) {
  const { TimerUI, stop, timeResRef } = useTimerUI({ level });
  // 시간 다 되면 틀리는 로직 구현
  const [isCrtAns, setIsCrtAns] = React.useState(null);
  const [isGrading, setIsGrading] = React.useState(false);
  const [stageRes, setStageRes] = React.useState({
    elapsedT: 0,
    pointEarned: 0,
  });

  /**
   * [Todo] 여기서 채점도 진행하면 좋을 듯
   * Grade Game and show UI
   * @param {boolean} _isCorrectAnswer
   * @param {Function} callback Function to call after timer ends
   */
  const gradeGame = async (_isCorrectAnswer, callback) => {
    await stop();
    setIsGrading(true);
    setIsCrtAns(_isCorrectAnswer);
    setStageRes({ elapsedT: timeResRef.current.elapsedT, pointEarned: _isCorrectAnswer ? level * 10 + (timeResRef.current.isBonus ? 5 : 0) : 0 });
    setTimeout(() => {
      callback();
      setIsCrtAns(null);
      setIsGrading(false);
    }, 1500);
  };

  const PointEarnedUI = () => <PEUI isGrading={isGrading} isCrtAns={isCrtAns} pointEarned={stageRes.pointEarned} />;

  return { isCrtAns, isGrading, stageRes, gradeGame, TimerUI, PointEarnedUI };
}

export default useGradedUI;
