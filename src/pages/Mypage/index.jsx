import React from 'react';

import Navbar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import { Profile, ProgressStatus } from './cards';
import style from './index.module.css';

import Lottie from 'lottie-react';
import cloud_bg from '../../assets/OCOC/Cloud_background.json';
function Mypage() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Profile />
        <ProgressStatus />
      </MainContainer>
    </>
  );
}

export default Mypage;
