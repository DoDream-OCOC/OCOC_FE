import React from 'react';

import { Text } from '../../../components/element';

import { ReactComponent as Loading } from '../../../assets/loading/ellipsis.svg';
import style from './index.module.css';

export const LevelSelectionBtn = ({ title, isLoading = false, content, onClick, SvgImg }) => {
  const [clicked, setClicked] = React.useState(false);

  const onClicked = () => {
    onClick(title);
    setClicked(true);
  };

  return (
    <div className={style.outer} onClick={onClicked}>
      {isLoading && clicked ? (
        <Loading />
      ) : (
        <span className={style.inner}>
          <SvgImg id={style.circle} />
          <span className={style.text}>
            <Text size="B2" content={title} />
            <Text size="B1" content={content} />
          </span>
        </span>
      )}
    </div>
  );
};

