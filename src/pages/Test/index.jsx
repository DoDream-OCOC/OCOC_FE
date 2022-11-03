import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';

import { Text } from '../../components/element';
import useTimerUI from '../../hooks/timer/useTimerUI';

function Test() {
  const navigate = useNavigate();
  const { TimerUI, timeRes, stop } = useTimerUI({ level: 1 });
  return (
    <>
      <NavBar />
      <MainContainer>
        <article>
          <Text size="H3" color="black" content="테스트 페이지입니다." style={{ wordSpacing: '-3px' }} />
          <div onClick={() => navigate('/')}>
            <Text size="B1" content="홈페이지로 돌아가기" />
          </div>
          <TimerUI />
          <button onClick={stop}>time stop!</button>
          <div>소요시간 : {timeRes.elapsedT}</div>
          <div>가산점 : {String(timeRes.isBonus)}</div>
        </article>
      </MainContainer>
    </>
  );
}

export default Test;
