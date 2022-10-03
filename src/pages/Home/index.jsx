import React from 'react';

import Navbar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import MainFooter from '../../components/footer/main';
import { MainCard, FeatureCard } from './cards';
import useScrollTo from '../../hooks/useScrollTo';

function Home() {
  useScrollTo();
  return (
    <>
      <Navbar />
      <MainContainer>
        <MainCard />
        <FeatureCard type="left" title="영작, 클릭으로 쉽게" content="순서대로 단어를 클릭해 영어 작문을 연습하세요!" />
        <FeatureCard type="right" title="PC, 모바일 어디에서든" content="장소에 구애받지 않고 어디서든 학습하세요" />
      </MainContainer>
      <MainFooter />
    </>
  );
}

export default Home;
