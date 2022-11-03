import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';

import { Text } from '../../components/element';
import { useTimerUI, useGradedUI } from '../../hooks';
import PointEarnedUI from '../../hooks/useGradedUI/PointEarnedUI';

function Test() {
  const navigate = useNavigate();
  const {
    TimerUI,
    timeRes: { elapsedT, pointEarned },
    stop,
  } = useTimerUI({ level: 1 });
  const [isCorrectBtn, isGrading, showGradedUI] = useGradedUI();
  const 시간아멈춰라 = () => {
    stop();
    showGradedUI(true, () => {});
  };
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
          <button onClick={시간아멈춰라}>time stop!</button>
          <div>소요시간 : {elapsedT}</div>
          <div>얻은 점수 : {pointEarned}</div>
          <PointEarnedUI isGrading={isGrading} isCrtAns={isCorrectBtn} pointEarned={pointEarned} />
        </article>
      </MainContainer>
    </>
  );
}

export default Test;
