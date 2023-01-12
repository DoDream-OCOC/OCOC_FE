import React from 'react';

/**
 * Timer hook
 * @param { 6000 | 10000 | 15000 } timeLimit stage1 : 6초 / stage2 : 10초 /  stage3 : 15초
 * @returns time, stop
 * Review1 : useState와 useEffect를 깊게 공부해볼 필요가 있다 정말
 * Review2 : useEffect에서 변경된 상태를 처리하려면, useRef가 필요함
 * Review3 : 브라우저에서 다른 탭으로 이동하면 타이머가 멈춤 -> 해결 필요
 * Review4 : 렌더링마다 고유의 state와 effect가 있다
 */
function useTimer(timeLimit) {
  const timer = React.useRef(null);
  const timeRef = React.useRef(timeLimit);
  const [time, setTime] = React.useState(timeRef.current);
  const [isNoTime, setIsNoTime] = React.useState(false);
  const [isTimeOut, setIsTimeOut] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [isReStart, setIsReStart] = React.useState(false);

  const stop = async () => {
    setIsDone(true);
    clearInterval(timer.current);
  };

  const reStart = () => setIsReStart(true);

  React.useEffect(() => {
    if (timeRef.current <= 0) {
      setIsTimeOut(true);
    }
  }, [time]);

  React.useEffect(() => {
    if (timeRef.current <= timeLimit / 2) setIsNoTime(true);
  }, [time, timeLimit]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      timeRef.current -= 50;
      setTime(timeRef.current);
    }, 50);
    return () => clearInterval(timer.current);
  }, []);

  React.useEffect(() => {
    if (isReStart) {
      timeRef.current = timeLimit;
      setTime(timeLimit);
      setIsNoTime(false);
      setIsTimeOut(false);
      setIsDone(false);
      setIsReStart(false);
      timer.current = setInterval(() => {
        timeRef.current -= 50;
        setTime(timeRef.current);
      }, 50);
    }
  }, [isReStart, timeLimit]);

  return { time, isNoTime, isTimeOut, isDone, stop, reStart };
}

export default useTimer;
