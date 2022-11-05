import React from 'react';
import useTimer from '../useTimer';

function useTimerUI() {}
// 얘를 컴포넌트로 빼줄까?
const TimerUI = () => {
  const { time, stop } = useTimer();
  return;
};

export default useTimerUI;
