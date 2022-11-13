import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';

import { score } from '../../apis';
import { Text, Empty, Button } from '../../components/element';

function Test() {
  // [Todo] 브라우저 탭 돌리면 멈추는 거 해결하기
  const navigate = useNavigate();

  const testPost = async () => {
    const res = await score.postScore(30, 3000, 1290);
    console.log(res);
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
          <Button onClick={testPost} content="postScore" />
        </article>
      </MainContainer>
    </>
  );
}

export default Test;
