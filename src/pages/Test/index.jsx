import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';

import { Text, Empty } from '../../components/element';
import { useGradedUI } from '../../hooks';

function Test() {
  const navigate = useNavigate();
  const { stageRes, gradeGame, TimerUI, PointEarnedUI } = useGradedUI({ level: 1 });
  const 시간아멈춰라 = isCrt => {
    gradeGame(isCrt, () => {});
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
          <Empty size="1rem" />
          <TimerUI />
          <Empty size="1rem" />
          <div style={{ display: 'flex' }}>
            <button onClick={() => 시간아멈춰라(true)} style={{ marginRight: '1rem' }}>
              정답을 맞춘 경우!
            </button>
            <button onClick={() => 시간아멈춰라(false)}>정답을 틀린 경우!</button>
          </div>
          <Empty size="1rem" />
          <div>
            소요시간 : {stageRes.elapsedT} &nbsp; 얻은 점수 : {stageRes.pointEarned}
          </div>
          <div></div>
          <PointEarnedUI />
        </article>
      </MainContainer>
    </>
  );
}

export default Test;
