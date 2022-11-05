import React from 'react';
import { useSelector } from 'react-redux';
import style from './index.module.css';
import { Text } from '../../components/element';
import { ReactComponent as Life } from '../../assets/icons/life.svg';

function LifeContainer() {
  return (
    <>
      <div className={style.life_container}>
        <Life className={style.life} width="23" height="23" />
        <Life className={style.life} width="23" height="23" />
        <Life className={style.life} width="23" height="23" />
      </div>
    </>
  );
}

export default LifeContainer;
