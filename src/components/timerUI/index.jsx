import React from 'react';
import useTimer from '../../hooks/useTimer';
import styled from './index.module.css';

/**
 * Timer component
 * @prop { 1 | 2 | 3 } level
 * @returns TimerUI
 * Review : 타이머 만들기 재밌었다
 */
const TimerUI = ({ level }) => {
  let timeLimit;
  if (level === 1) timeLimit = 6;
  else if (level === 2) timeLimit = 10;
  else if (level === 3) timeLimit = 15;
  const { time, isNoTime, stop } = useTimer(timeLimit);

  // 시간이 절반 남았을 때 UI 변경
  // 절반 안에 풀었을 때 가산점

  return (
    <div id={styled.timerContainer}>
      <div id={styled.timer} className={isNoTime ? styled.red : styled.green} style={{ width: `${(time / timeLimit / 1000) * 100}%` }}>
        {isNoTime ? '시간이 없어요!' : '다음 문장을 번역하세요.'}
      </div>
    </div>
  );
};

export default TimerUI;
