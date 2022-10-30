import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, Empty, Button } from '../../../components/element';
import { ReactComponent as OCOCTitle } from '../../../assets/OCOC/OCOC_text.svg';
import header_video from '../../../assets/OCOC/ococ_header_video.mp4';
import style from './index.module.css';

export const MainCard = () => {
  const navigate = useNavigate();

  return (
    <article>
      <Empty size="1rem" />
      <div style={{ position: 'absolute', x: '400px' }}>
        <div className={style.video_wrapper}>
          <video src={header_video} autoPlay muted loop preload="auto"></video>
        </div>
      </div>
      <Empty size="17rem" />
      <Text size="H5" color="black" content="영어 작문의 꾸준한 첫걸음," />
      <Empty size="1rem" />
      <OCOCTitle style={{ width: '9.43rem', height: '2.563rem', fill: 'var(--Green)', ZIndex: '3' }} />
      <Empty size="4.9rem" />
      {/* [Todo] 비회원일 경우, 다른 페이지로 이동 */}
      <Button onClick={() => navigate('/play-game')} content="시작하기" />
      <Empty size="6rem" />
    </article>
  );
};
