import React from 'react';
import { useDispatch } from 'react-redux';
import { gameSlice } from '../../store/slices';
import { gradeStudy } from '../../utils/gradeStudy';
import useTimerUI from '../timer/useTimerUI';
import { PointEarnedUI as PEUI } from '../../components/PointEarnedUI';
import { CrtAnswerUI as CRTANS } from '../../components/CrtAnswerUI';
/**
 * useGradedUI hook
 * 허브 느낌으로 가려고 함
 * @prop level
 * @returns isCrtAns, isGrading, stageRes, showGradedUI, TimerUI, PointEarnedUI
 */
function useGradedUI({ level }) {
  const dispatch = useDispatch();
  const { TimerUI, stop, reStart, timeResRef, isTimeOut } = useTimerUI({ level });
  const [isCrtAns, setIsCrtAns] = React.useState(null);
  const [isGrading, setIsGrading] = React.useState(false);

  /**
   * Grade Game and show UI
   * @param {boolean} _isCorrectAnswer
   * @param {Function} callback Function to call after timer ends
   */
  const gradeGame = async ({ userAnswer, answer, datasetId }, callback) => {
    const isCorrect = await gradeStudy(userAnswer, answer, datasetId);
    await stop();
    setIsGrading(true);
    setIsCrtAns(isCorrect);
    isCorrect && dispatch(gameSlice.actions.setStudyResult({ elapsedT: timeResRef.current.elapsedT, pointEarned: level * 10 + (timeResRef.current.isBonus ? 5 : 0), isCrtAns: isCorrect }));
    setTimeout(() => {
      callback();
      setIsCrtAns(null);
      setIsGrading(false);
      reStart();
    }, 1500);
  };

  const PointEarnedUI = () => <PEUI isGrading={isGrading} isCrtAns={isCrtAns} />;
  const CrtAnswerUI = () => <CRTANS isGrading={isGrading} isCrtAns={isCrtAns} />;

  return { isCrtAns, isGrading, isTimeOut, stop, gradeGame, TimerUI, PointEarnedUI, CrtAnswerUI };
}

export default useGradedUI;
