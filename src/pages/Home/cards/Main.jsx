import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, Empty, Button } from '../../../components/element';
import { ReactComponent as OCOCTitle } from '../../../assets/OCOC/OCOC_text.svg';
import { Turtle } from './turtle';
import style from './index.module.css';

import Lottie from 'lottie-react';
import cloud_bg from '../../../assets/OCOC/Cloud_background.json';

export const MainCard = () => {
  const navigate = useNavigate();
  return (
    <article>
      <Empty size="1rem" />
      <div style={{ position: 'absolute', x: '400px' }}>
        <div className={style.video_wrapper}>
          <Lottie animationData={cloud_bg} />
        </div>
      </div>
      <Empty size="1rem" />
      <div className={style.text_wrapper}>
        <Text size="H4" color="black" content="영어 순서 맞추기 게임," />
        <Empty size="0.6rem" />
        <OCOCTitle style={{ width: '9.43rem', height: '2.563rem', fill: 'var(--Green)', ZIndex: '3' }} />
      </div>

      <Empty size="15rem" />
      <Turtle />
      <Button onClick={() => navigate('')} content="시작하기" />
      <Empty size="6rem" />
    </article>
  );
};

{
  /* <video src={header_video} autoPlay muted loop preload="auto"></video> */
}
