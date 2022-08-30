import React from 'react';

import { Text } from '../../../components/element';
import { ReactComponent as Circle } from '../../../assets/fake/lvlslc_btn.svg';
import style from './index.module.css';

export const LevelSelectionBtn = ({ title, content }) => {
  return (
    <div className={style.outer}>
      <span className={style.inner}>
        <Circle style={{ marginRight: '1rem' }} />
        <span className={style.text}>
          <Text size="S-Bold" content={title} />
          <Text size="S" content={content} />
        </span>
      </span>
    </div>
  );
};
