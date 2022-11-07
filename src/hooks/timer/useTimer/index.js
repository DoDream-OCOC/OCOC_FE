import React from 'react';

/**
 * Timer hook
 * @param { 6000 | 10000 | 15000 } timeLimit stage1 : 6초 / stage2 : 10초 /  stage3 : 15초
 * @returns time, stop
 * Review1 : useState와 useEffect를 깊게 공부해볼 필요가 있다 정말
 * Review2 : useEffect에서 변경된 상태를 처리하려면, useRef가 필요함
 * Review3 : 브라우저에서 다른 탭으로 이동하면 타이머가 멈춤 -> 해결 필요
 */
function useTimer(timeLimit) {
  const timer = React.useRef(null);
  const timeRef = React.useRef(timeLimit);
  const [time, setTime] = React.useState(timeRef.current);
  const [isNoTime, setIsNoTime] = React.useState(false);
  const [isTimeOut, setIsTimeOut] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [isReStart, setIsReStart] = React.useState(false);

  // [Error] stop이 호출이 여러 번 됨
  const stop = async () => {
    console.log('stop');
    setIsDone(true);
    clearInterval(timer.current);
  };

  const reStart = () => setIsReStart(true);

  React.useEffect(() => {
    // 왜 <= 0일때는 여러 번 실행되었을까?
    if (timeRef.current === 0) {
      console.log('is timeOut');
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
      // [Error] 타이머가 다시 안돌아가네?
      timeRef.current = timeLimit;
      setTime(timeLimit);
      setIsNoTime(false);
      setIsTimeOut(false);
      setIsDone(false);
      setIsReStart(false);
      console.log('타이머 재시작');
      timer.current = setInterval(() => {
        console.log('째깍쨰각');
        timeRef.current -= 50;
        setTime(timeRef.current);
      }, 50);
    }
    return () => clearInterval(timer.current);
  }, [isReStart, timeLimit]);

  return { time, isNoTime, isTimeOut, isDone, stop, reStart };
}

export default useTimer;
