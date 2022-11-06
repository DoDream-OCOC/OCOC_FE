import React from 'react';
import style from './index.module.css';
import { gameSlice } from '../../store/slices';
import { useSelector } from 'react-redux';
import { ReactComponent as Life } from '../../assets/icons/life.svg';
import { ReactComponent as EmptyLife } from '../../assets/icons/emptyLife.svg';
import { useKeywords } from '../../hooks';

function LifeContainer() {
  const { life } = useSelector(state => state.game);

  const LifeState = () => {
    if (life === 3) {
      return (
        <>
          <div className={style.life_container}>
            <Life className={style.life} width="23" height="23" />
            <Life className={style.life} width="23" height="23" />
            <Life className={style.life} width="23" height="23" />
          </div>
        </>
      );
    } else if (life === 2) {
      return (
        <>
          <div className={style.life_container}>
            <Life className={style.life} width="23" height="23" />
            <Life className={style.life} width="23" height="23" />
            <EmptyLife className={style.life} width="23" height="23" />
          </div>
        </>
      );
    } else if (life === 1) {
      return (
        <>
          <div className={style.life_container}>
            <Life className={style.life} width="23" height="23" />
            <EmptyLife className={style.life} width="23" height="23" />
            <EmptyLife className={style.life} width="23" height="23" />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={style.life_container}>
            <EmptyLife className={style.life} width="23" height="23" />
            <EmptyLife className={style.life} width="23" height="23" />
            <EmptyLife className={style.life} width="23" height="23" />
          </div>
        </>
      );
    }
  };
  return { LifeState };
}

export default LifeContainer;
