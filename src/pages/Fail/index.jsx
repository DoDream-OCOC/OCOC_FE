import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';

import { Text } from '../../components/element';

// [Todo] http status 오류 메세지를 담기
function Fail() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <MainContainer>
        <article>
          <Text size="H3" color="black" content="잘못된 접근입니다." style={{ wordSpacing: '-3px' }} />
          <div onClick={() => navigate('/')}>
            <Text size="B1" content="홈페이지로 돌아가기" />
          </div>
        </article>
      </MainContainer>
    </>
  );
}

export default Fail;
