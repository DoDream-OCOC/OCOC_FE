import React from 'react';
import { Text, Empty, Button } from '../../../components/element';
import style from './index.module.css';

export const Ranking = () => {
  return (
    <section>
      <Empty size="4rem" />
      <div className={style.title_wrapper}>
        <Text size="H2" content="랭킹" />
      </div>
    </section>
  );
};
