import React from 'react';
import { useMainCard } from './useMainCard';

import { Text, Empty, Button } from '../../../components/element';
import { ReactComponent as OCOCTitle } from '../../../assets/OCOC/OCOC_text.svg';
import { Turtle } from './turtle';
import style from './index.module.css';

export const MainCard = () => {
  const { letsPlayGame } = useMainCard();

  return (
    <article>
      <Empty size="3rem" />
      <div className={style.text_wrapper}>
        <Text size="H4" color="black" content="영어 순서 맞추기 게임," />
        <Empty size="0.6rem" />
        <OCOCTitle style={{ width: '9.43rem', height: '2.563rem', fill: 'var(--Green)', ZIndex: '3' }} />
      </div>

      <Empty size="10rem" />
      <Turtle />
      <Button onClick={() => letsPlayGame()} content="시작하기" />
      <Empty size="6rem" />
    </article>
  );
};
