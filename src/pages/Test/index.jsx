import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';

import { Text } from '../../components/element';
import { TimerUI } from '../../components';

function Test() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <MainContainer>
        <article>
          <Text size="H3" color="black" content="테스트 페이지입니다." style={{ wordSpacing: '-3px' }} />
          <div onClick={() => navigate('/')}>
            <Text size="B1" content="홈페이지로 돌아가기" />
          </div>
          <TimerUI level={1} />
        </article>
      </MainContainer>
    </>
  );
}

export default Test;
