import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/navbar';
import ProgressBar1 from '../../components/progressbar';
import MainContainer from '../../components/container/main';
import { Profile, Ranking } from './cards';
import { Empty, Button, Text } from '../../components/element';
import style from './index.module.css';

import Lottie from 'lottie-react';
import cloud_bg from '../../assets/OCOC/Cloud_background.json';

function Mypage() {
  // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.

  return (
    <>
      <Navbar />
      <MainContainer>
        <Empty size="3rem" />
        <Text content="test" />
        <section style={{ maxWidth: '25rem', margin: '0 auto' }}></section>
        <section style={{ marginTop: '4rem' }}></section>
        <section>
          <Empty size="2rem" />
          <Empty size="0.5rem" />
        </section>
      </MainContainer>
    </>
  );
}

export default Mypage;
