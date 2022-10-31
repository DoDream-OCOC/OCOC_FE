import React from 'react';

function useTimer() {
  //start가 있어야 하나?
  const [time, setTime] = React.useState(5000);
  const timer = setInterval(() => setTime(prev => prev - 100), 100);
  if (time === 0) clearInterval(timer);

  return { time };
}

export default useTimer;
