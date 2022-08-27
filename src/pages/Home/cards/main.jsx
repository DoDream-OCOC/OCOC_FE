import React from 'react';

import { Text, Empty, Button } from '../../../components/element';
import style from './index.module.css';

// [Temp] 그냥 이름 생각안나서 card
export const MainCard = () => {
  return (
    <article>
      <Text size="M" text="영어 작문의 꾸준한 첫걸음," />
      <Empty size="1rem" />
      <Text size="L" text="영차영차" />
      <Empty size="5rem" />
      <Button />
    </article>
  );
};
