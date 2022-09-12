import React from 'react';

import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import MainFooter from '../../components/footer/main';

import useModal from '../../hooks/useModal';

// [Todo] http status 오류 메세지를 담기
function Fail() {
  const { openModal } = useModal();
  React.useEffect(() => {
    openModal();
  }, []);
  return (
    <>
      <NavBar />
      <MainContainer>Home</MainContainer>
      <MainFooter />
    </>
  );
}

export default Fail;
