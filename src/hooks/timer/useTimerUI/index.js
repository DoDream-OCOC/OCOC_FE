import React from 'react';
import useTimer from '../useTimer';
import styled from './index.module.css';

/**
 * TimerUI hook
 * @prop { 1 | 2 | 3 } level
 * @returns TimerUI, timeRes, stop
 * Review1 : 타이머 만들기 재밌었다
 * Review2 : useStateA이 useStateB의 종속적이고, 같은 scope에서 set을 해주어서
 * stateB가 갱신이 안된 상태로 올 때는 useRef로 useStateB를 대체하고, async와 await을 사용해주면 됨
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
  const timeResRef = React.useRef({
    elapsedT: 0,
    isBonus: 0,
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
    if (isDone) {
      timeResRef.current = {
        elapsedT: timeLimit - time,
        isBonus: !isNoTime,
      };
    }
  }, [isDone, isNoTime, time, timeLimit]);

  return { TimerUI, stop, timeResRef };
};

export default useTimerUI;
