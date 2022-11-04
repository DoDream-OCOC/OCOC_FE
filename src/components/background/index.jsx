import React from 'react';
import Lottie from 'lottie-react';
import cloud_bg from '../../assets/OCOC/Cloud_background.json';
import style from './index.module.css';
function Background() {
  return (
    <div className={style.background_wrapper}>
      <Lottie animationData={cloud_bg} />
    </div>
  );
}

export default Background;
