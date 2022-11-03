import React from 'react';
import useTimer from '../useTimer';
import styled from './index.module.css';

/**
 * TimerUI hook
 * @prop { 1 | 2 | 3 } level
 * @returns TimerUI, timeRes, stop
 * Review : 타이머 만들기 재밌었다
 * Example
 * const { TimerUI, timeRes, stop } = useTimerUI({ level: 1 }); *Need level
 * ...
 * <TimerUI /> *Need
 * <button onClick={stop}>time stop!</button> *Need stop
 */
const useTimerUI = ({ level = 1 }) => {
  let timeLimit;
  if (level === 1) timeLimit = 6000;
  else if (level === 2) timeLimit = 10000;
  else if (level === 3) timeLimit = 15000;
  const [timeRes, setTimeRes] = React.useState({
    elapsedT: 0,
    isBonus: false,
  });
  const { time, isNoTime, isDone, stop } = useTimer(timeLimit);
  const TimerUI = () => {
    return (
      <div id={styled.timerContainer}>
        <div id={styled.timer} className={isNoTime ? styled.red : styled.green} style={{ width: `${(time / timeLimit) * 100}%` }}>
          {isNoTime ? '시간이 없어요!' : '다음 문장을 번역하세요.'}
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    if (isDone)
      setTimeRes({
        elapsedT: timeLimit - time,
        isBonus: !isNoTime,
      });
  }, [isDone, isNoTime, time, timeLimit]);

  return { TimerUI, timeRes, stop };
};

export default useTimerUI;
