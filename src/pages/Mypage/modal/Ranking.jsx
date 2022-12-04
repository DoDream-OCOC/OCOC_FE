import React from 'react';
import { Text, Empty } from '../../../components/element';
import style from './index.module.css';

const Ranking = ({ rank, id, score }) => {
  return (
    <section>
      <Empty size="0.5rem" />
      <div className={rank === 'MY' ? style.title_wrapper : style.title_wrapper_other}>
        <Text color={rank === 'MY' ? 'Text-3' : 'Text-2'} size="B1" content={rank} />
        <Text color={rank === 'MY' ? 'Text-3' : 'Text-2'} size="B1" content={id} />
        <Text color={rank === 'MY' ? 'Text-3' : 'Text-2'} size="B1" content={score} />
      </div>
    </section>
  );
};

export default Ranking;
