import React from 'react';
import { Text, Empty, Button } from '../../../components/element';
import style from './index.module.css';

export const ProgressStatus = () => {
  return (
    <section
      style={{
        backgroundColor: 'red',
      }}>
      <Empty size="5rem" />
      <div>----------프로그레스바----------</div>
    </section>
  );
};
