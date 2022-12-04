import React from 'react';
import { useModal } from '../../hooks';
import { useMutation } from 'react-query';

import Navbar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import { Empty, Button, Text } from '../../components/element';
import ChartModal from './modal';
import { Turtle } from '../../components';
import Carousel from './cards/Carousel';

const curLevel = {
  여행: 'TRV',
  음식: 'FOD',
  예약: 'BOK',
  구매: 'BUY',
};

function Mypage() {
  const mutation = useMutation({ mutationFn: async () => {}, onSuccess: () => {} });
  const { Modal, openModal, closeModal } = useModal();
  // [Todo] 마이페이지에서 데이터 받아서 뿌리기

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
