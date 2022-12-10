import React from 'react';
import { useMutation } from 'react-query';
import { info } from '../../apis';

import Navbar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import { Empty, Button, Text } from '../../components/element';
import { Turtle } from '../../components';
import Carousel from './cards/Carousel';

const LEVEL = {
  TRV: 1,
  FOD: 2,
  BOK: 3,
  BUY: 4,
};

function Mypage() {
  const mutation = useMutation({
    mutationFn: async () => await info.getCurGameSet().then(res => res),
    onSuccess: res => setCurLevel(LEVEL[res]),
  });
  const [curLevel, setCurLevel] = React.useState(0);
  // [Todo] 마이페이지에서 데이터 받아서 뿌리기

  React.useLayoutEffect(() => {
    mutation.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      <MainContainer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '90vw', maxWidth: '25rem' }}>
            <Empty size="6rem" />
            {/* [todo] 여기도 api 받아서 작업하기 */}
            <Text size="H3" content="{userId}님," />
            <Text size="H3" content="안녕하세요!" />
            <Empty size="3rem" />
            <Turtle scale="6rem" />
            <Button content="PART 1 일상생활" />
            <Empty size="2rem" />
            <Carousel curLevel={curLevel} />
          </div>
        </div>
        <section style={{ marginTop: '4rem' }}></section>
      </MainContainer>
    </>
  );
}

export default Mypage;
