import React from 'react';

import MainHeader from '../../components/header/main';
import MainContainer from '../../components/container/main';
import MainFooter from '../../components/footer/main';
import { MainCard, FeatureCard } from './cards';

import style from './index.module.css';

function Home() {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <MainCard />
        <FeatureCard />
      </MainContainer>
      <MainFooter />
    </>
  );
}

export default Home;
