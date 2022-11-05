import React from 'react';
import { Text, Empty, Button } from '../../../components/element';
import style from './index.module.css';

import Lottie from 'lottie-react';
import cloud_bg from '../../../assets/OCOC/Cloud_background.json';

export const Profile = () => {
  return (
    <div className={style.profile_wrapper}>
      <Empty size="3rem" />
      <div>
        <p>점수</p>
        <p>평균 속도</p>
      </div>
    </div>
  );
};
