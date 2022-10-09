import React from 'react';
import { Text, Button, Empty } from '../../../components/element';

export const ClickEngModal = ({ onLogIn, onBackToMain }) => {
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
      <Button content="그냥 할래요" onClick={() => onBackToMain()} style={{ backgroundColor: 'var(--Gray-1)', color: 'var(--Gray-4)' }} />
    </article>
  );
};
