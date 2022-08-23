import React from 'react';

import MainHeader from '../../components/header/main';
import MainContainer from '../../components/container/main';
import MainFooter from '../../components/footer/main';

// [Todo] http status 오류 메세지를 담기
function Fail() {
  return (
    <>
      <MainHeader />
      <MainContainer>Home</MainContainer>
      <MainFooter />
    </>
  );
}

export default Fail;
