import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks';

import Navbar from '../../components/navbar';
import ProgressBar1 from '../../components/progressbar';
import MainContainer from '../../components/container/main';
import { Empty, Button, Text } from '../../components/element';
import ChartModal from './modal';
import style from './index.module.css';

import Lottie from 'lottie-react';
import { Turtle } from '../../components';
import cloud_bg from '../../assets/OCOC/Cloud_background.json';

import Carousel from './cards/Carousel';

function Mypage() {
  const { Modal, openModal, closeModal } = useModal();
  // [Todo] 마이페이지에서 데이터 받아서 뿌리기

  // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.

  return (
    <>
      <Navbar />
      <Modal>
        <ChartModal closeModal={closeModal} />
      </Modal>
      <MainContainer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '90vw', maxWidth: '25rem' }}>
            <Empty size="6rem" />
            {/* [todo] 여기도 api 받아서 작업하기 */}
            <Text size="H3" content="{userId}님," />
            <Text size="H3" content="안녕하세요!" />
            <Empty size="3rem" />
            <Turtle scale="6rem" />
            {/* [todo] 요건 어떻게? */}
            <Button content="PART 1 일상생활" />
            <Empty size="2rem" />
            <Carousel openModal={openModal} />
          </div>
        </div>
        <section style={{ marginTop: '4rem' }}></section>
      </MainContainer>
    </>
  );
}

export default Mypage;
