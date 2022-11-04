import React from 'react';

import Navbar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import { MainCard } from './cards';
// import useScrollTo from '../../hooks/useScrollTo';

function Home() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <MainCard />
      </MainContainer>
    </>
  );
}

export default Home;
