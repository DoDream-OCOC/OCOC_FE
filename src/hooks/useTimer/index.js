import React from 'react';

/**
 * Timer hook
 * @param { 6 | 10 | 15 } timeLimit stage1 : 6초 / stage2 : 10초 /  stage3 : 15초
 * @returns time, stop
 * Review1 : useState와 useEffect를 깊게 공부해볼 필요가 있다 정말
 * Review2 : useEffect에서 변경된 상태를 처리하려면, useRef가 필요함
 */
function useTimer(timeLimit) {
  const timer = React.useRef(null);
  const timeRef = React.useRef(timeLimit * 1000);
  const [time, setTime] = React.useState(timeRef.current);
  const [isNoTime, setIsNoTime] = React.useState(false);

  React.useEffect(() => {
    if (timeRef.current <= 0) clearInterval(timer.current);
  }, [time]);

  React.useEffect(() => {
    if (timeRef.current <= (timeLimit * 1000) / 2) setIsNoTime(true);
  }, [time, timeLimit]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      timeRef.current -= 50;
      setTime(timeRef.current); // [Temp] 일단 -1초
    }, 50);
    return () => clearInterval(timer.current);
  }, []);

  const stop = () => clearInterval(timer.current);

  return { time, isNoTime, stop };
}

export default useTimer;
