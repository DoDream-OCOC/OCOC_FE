import React from 'react';

import { Text, Empty } from '../../../components/element';
import style from './index.module.css';

/**
 * FeatureCard component
 * @param {left, right} type Typeof Title text position
 */

export const FeatureCard = ({ type , title, content }) => {
  return (
    <article>
      <div className={style.FeatureTitle} style={{ textAlign: type }}>
        <Text size="H3" content={title} style={{  wordSpacing: "-3px"
}} />
        <Empty size="0.4rem" />
        <Text size="H5" content={ content } style= {{wordSpacing: "-1px"}} />
      </div>
      <Empty size="3rem" />
      <div className={style.box} />
    </article>
  );
};
