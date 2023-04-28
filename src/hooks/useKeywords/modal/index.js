import React from 'react';

import { Text, Button, Empty } from '../../../components/element';

export const PlayGameModal = ({ onLogIn, onBackToMain }) => {
  return (
    <article>
      <Text color="Text-1" content="지금은 비회원으로 학습중입니다..." />
      <Empty size="2rem" />
      <div style={{ width: '10rem', height: '10rem', borderRadius: '100%', backgroundColor: 'var(--Gray-3)' }} />
      <Empty size="2rem" />
      <Text color="Text-2" content="내 실력에 맞는 문장을 학습하려면" />
      <Text color="Text-2" style={{ fontWeight: 'bolder' }} content="로그인을 권장드립니다!" />
      <Empty size="1.6rem" />
      <Button content="로그인하기" onClick={() => onLogIn()} />
      <Empty size="0.5rem" />
      <Button content="그냥 할래요" onClick={onBackToMain} style={{ backgroundColor: 'var(--Gray-1)', color: 'var(--Gray-4)' }} />
    </article>
  );
};

export const ResultModal = ({ onLogIn, onBackToMain, resState }) => {
  const { bestScore, score, topPercent } = resState;
  return (
    <>
      <article>
        <div style={{ maxHeight: '34rem', width: '46rem', borderRadius: '1.5rem 1.5rem 1.5rem 1.5rem', backgroundColor: 'var(--Gray-0)', textAlign: 'center', paddingBottom: '2rem' }}>
          <div style={{ width: '100%', height: '4rem', borderRadius: '1.5rem 1.5rem 0rem 0rem', backgroundColor: 'var(--Gray-4)', paddingTop: '0.8rem' }}>
            <Text color="Text-3" content="게임 종료" size="H3" />
          </div>
          <Empty size="3rem" />
          <Text color="Text-2" content="'상위 " size="B1" />
          <Text color="Text-2" content={topPercent} size="H4" />
          <Text color="Text-2" content="%의" size="B1" />
          <Empty size="0.1rem" />
          <Text color="Text-2" content="영어 실력을 가지고 있어요!'" size="B1" />
          <Empty size="3rem" />
          <div style={{ width: '100%', height: '6rem', backgroundColor: 'var(--Green)', paddingTop: '0.3rem' }}>
            <Text color="Text-3" content={score} size="H2" />
            <Empty size="0.05rem" />
            <Text color="Text-3" content="+" size="H4" />
            <Text color="Text-3" content={score - bestScore} size="H4" />
          </div>
          <Empty size="2rem" />
          {/*<Button content="로그인 후 기록 저장하기" onClick={() => onLogIn()} style={{ backgroundColor: 'var(--Gray-0)', color: 'var(--Green)', border: 'solid 2px var(--Green)' }} />*/}
          <Empty size="0.8rem" />
          <Button content="홈으로" onClick={() => onBackToMain()} style={{ backgroundColor: 'var(--Gray-1)', color: 'var(--Gray-4)' }} />
          <Empty size="0.8rem" />
          <Button content="결과 공유하기" style={{ backgroundColor: 'transparent', color: 'var(--Black)' }} />
        </div>
      </article>
    </>
  );
};
