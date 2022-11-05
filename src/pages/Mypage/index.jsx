import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import { Profile, ProgressStatus, Ranking } from './cards';
import { Empty, Button } from '../../components/element';
import style from './index.module.css';

import Lottie from 'lottie-react';
import cloud_bg from '../../assets/OCOC/Cloud_background.json';

function Mypage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <MainContainer>
        <Profile />
        <Empty size="2rem" />
        <ProgressStatus />
        <section style={{ marginTop: '4rem' }}>
          <Button onClick={() => navigate('')} content="시작하기" />
        </section>
        <Ranking />
      </MainContainer>
    </>
  );
}

export default Mypage;
