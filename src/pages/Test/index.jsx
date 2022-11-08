import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';

import { Text, Empty, Button } from '../../components/element';

function Test() {
  // [Todo] 브라우저 탭 돌리면 멈추는 거 해결하기
  const navigate = useNavigate();
  const timerRef = React.useRef();
  const [time, setTime] = React.useState(10000);
  const [isReStart, setIsReStart] = React.useState(false);

  const stop = () => {
    clearInterval(timerRef.current);
    console.log('stop ID : ', timerRef.current);
  };

  const restart = () => {
    setTime(10000);
    setIsReStart(true);
  };

  React.useEffect(() => {
    if (time <= 0) {
      clearInterval(timerRef.current);
      console.log('time out');
    }
  }, [time]);

  React.useEffect(() => {
    console.log('timer start. ID :', timerRef.current);
    timerRef.current = setInterval(() => {
      setTime(prev => prev - 500);
    }, 500);
    return () => clearInterval(timerRef.current);
  }, []);

  React.useEffect(() => {
    if (isReStart) {
      console.log('timer Restart');
      setIsReStart(false);
      // 딱 여기만 실행이 안됨
      timerRef.current = setInterval(() => {
        setTime(prev => prev - 500);
      }, 500);
      // 이 경우는 돌아감
      // setInterval(() => {
      //   setTime(prev => prev - 500);
      // }, 500);
      console.log('restart ID : ', timerRef.current);
    }
    // [해결] 클린업 함수를 지워주니까 됐음 -> 클린 업 함수가 언제 돌아가는 걸까
    // return () => clearInterval(timerRef.current);
  }, [isReStart]);

  React.useEffect(() => console.log(time), [time]);

  return (
    <>
      <NavBar />
      <MainContainer>
        <article>
          <Text size="H3" color="black" content="테스트 페이지입니다." style={{ wordSpacing: '-3px' }} />
          <div onClick={() => navigate('/')}>
            <Text size="B1" content="홈페이지로 돌아가기" />
          </div>
          <Empty size="1rem" />
          <Button onClick={stop} content="멈춰!" />
          <Empty size="1rem" />
          <Button onClick={restart} content="재시작" />
        </article>
      </MainContainer>
    </>
  );
}

export default Test;
