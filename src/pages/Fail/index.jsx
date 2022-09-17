import React from 'react';

import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';

// [Todo] http status 오류 메세지를 담기
function Fail() {
  return (
    <>
      <NavBar />
      <MainContainer></MainContainer>
    </>
  );
}

export default Fail;
