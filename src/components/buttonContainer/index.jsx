import React from 'react';
import style from './index.module.css';

function ButtonContainer() {
  return (
    <>
      <div className={style.input_box_container}>
        <div className={style.input_box}></div>
        <div className={style.input_box}></div>
      </div>
    </>
  );
}

export default ButtonContainer;
