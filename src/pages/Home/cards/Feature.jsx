import React from 'react';

import { Text, Empty } from '../../../components/element';
import style from './index.module.css';

/**
 * FeatureCard component
 * @param {left, right} type Typeof Title text position
 */

export const FeatureCard = ({ type }) => {
  return (
    <article>
      <div className={style.FeatureTitle} style={{ textAlign: type }}>
        <Text size="M-Bold" text="특징 기능 제목입니다." />
        <Empty size="0.3rem" />
        <Text size="S" text="특징 기능 설명 문구가 들어갑니다." />
      </div>
      <Empty size="3rem" />
      <div className={style.box} />
    </article>
  );
};
