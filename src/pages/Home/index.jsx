import React from 'react';

import MainHeader from '../../components/header/main';
import MainContainer from '../../components/container/main';
import MainFooter from '../../components/footer/main';

import style from './index.module.css';

function Home() {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <div id={style.test}>Home</div>
        <div id={style.test}>Home</div>
      </MainContainer>
      <MainFooter />
    </>
  );
}

export default Home;
