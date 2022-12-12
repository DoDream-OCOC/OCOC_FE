import React from 'react';
import { useMutation } from 'react-query';
import { info, score } from '../../apis';

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
    mutationFn: async () => {
      const resObj = {};
      await info.getCurGameSet().then(res => (resObj.curLevel = LEVEL[res]));
      for (let lvl of Object.keys(LEVEL)) await score.getBestScoreBySet(lvl).then(res => (resObj[lvl] = res));
      return resObj;
    },
    onSuccess: resObj => {
      setCurLevel(resObj.curLevel);
      for (let lvl of Object.keys(LEVEL))
        setRankObj(prev => {
          return { ...prev, [lvl]: resObj[lvl] };
        });
    },
  });
  const [curLevel, setCurLevel] = React.useState(0);
  const [rankObj, setRankObj] = React.useState({
    TRV: 0,
    FOD: 0,
    BOK: 0,
    BUY: 0,
  });

  React.useLayoutEffect(() => {
    mutation.mutate(); // [Error] 두 번 요청되는 이유?
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      <MainContainer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '90vw', maxWidth: '25rem' }}>
            <Empty size="6rem" />
            {/* userID 조회 일단 보류 */}
            {/* <Text size="H3" content="{userId}님," /> */}
            <Text size="H3" content="하단 세트를 차례대로 풀어보세요!" />
            <Empty size="3rem" />
            <Turtle scale="6rem" />
            <Button content="PART 1 일상생활" />
            <Empty size="2rem" />
            <Carousel curLevel={curLevel} rankObj={rankObj} />
          </div>
        </div>
        <section style={{ marginTop: '4rem' }}></section>
      </MainContainer>
    </>
  );
}

export default Mypage;
