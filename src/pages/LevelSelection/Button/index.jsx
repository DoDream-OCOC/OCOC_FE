import React from 'react';

import { Text } from '../../../components/element';
import { ReactComponent as Circle } from '../../../assets/fake/lvlslc_btn.svg';
import style from './index.module.css';

export const LevelSelectionBtn = ({ title, content, onClick }) => {
  return (
    <div className={style.outer} onClick={() => onClick(title)}>
      <span className={style.inner}>
        <Circle id={style.circle} />
        <span className={style.text}>
          <Text size="B2" content={title} />
          <Text size="B1" content={content} />
        </span>
      </span>
    </div>
  );
};
