import React from 'react';
import { useMainCard } from './useMainCard';
import { isSigned } from '../../../utils/isSigned';

import { Text, Empty, Button } from '../../../components/element';
import { ReactComponent as OCOCTitle } from '../../../assets/OCOC/OCOC_text.svg';
import { Turtle } from '../../../components';
import style from './index.module.css';

export const MainCard = () => {
  const { letsPlayGame, goToSignInPage } = useMainCard();

  return (
    <article>
      <Empty size="1rem" />
      <Empty size="1rem" />
      <div className={style.text_wrapper}>
        <Text size="H4" color="black" content="영어 순서 맞추기 게임," />
        <Empty size="0.6rem" />
        <OCOCTitle style={{ width: '9.43rem', height: '2.563rem', fill: 'var(--Green)', ZIndex: '3' }} />
      </div>

      <Empty size="13rem" />
      <div style={{ width: '100%', maxWidth: '25rem', display: 'flex', height: '3rem', justifyContent: 'flex-start' }}>
        <Turtle scale="6rem" />
      </div>
      <Button onClick={isSigned() ? () => letsPlayGame() : goToSignInPage()} content="시작하기" />
      <Empty size="6rem" />
    </article>
  );
};
