import React from 'react';
import useTimer from '../useTimer';
import styled from './index.module.css';

/**
 * TimerUI hook
 * @prop { 1 | 2 | 3 } level
 * @returns TimerUI
 * Review : 타이머 만들기 재밌었다
 */
const useTimerUI = ({ level }) => {
  let timeLimit;
  // const timeResRef = React.useRef({});
  if (level === 1) timeLimit = 6000;
  else if (level === 2) timeLimit = 10000;
  else if (level === 3) timeLimit = 15000;
  const { time, isNoTime, isDone, stop } = useTimer(timeLimit);

  const TimerUI = () => (
    <div id={styled.timerContainer}>
      <div id={styled.timer} className={isNoTime ? styled.red : styled.green} style={{ width: `${(time / timeLimit) * 100}%` }}>
        {isNoTime ? '시간이 없어요!' : '다음 문장을 번역하세요.'}
      </div>
    </div>
  );

  // const timeRes = {
  //   elapsedT :
  // }

  // stop이 될 때 elapsedT 구하기,
  // 초과될 때 이벤트
  // React.useEffect(() => {
  //   timeResRef.current = {
  //     elapsedT: timeLimit,
  //   };
  // }, [isDone]);

  // 절반 안에 풀었을 때 가산점

  return { TimerUI, time, stop };
};

export default useTimerUI;
