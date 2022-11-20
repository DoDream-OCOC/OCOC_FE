import React from 'react';
import Lottie from 'lottie-react';
import turtle from '../../assets/OCOC/OCOC_turtle.json';
import style from './index.module.css';

function Turtle() {
  return <Lottie className={style.Turtle} animationData={turtle} />;
}

export default Turtle;
