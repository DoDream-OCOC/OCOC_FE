import React from 'react';

import { Text, Empty, Button } from '../../../components/element';
import { ReactComponent as OCOC_title} from '../../../assets/OCOC/OCOC_text.svg';
import Phone_img from '../../../assets/OCOC/OCOC_phone.png';
import style from './index.module.css';

// [Temp] 그냥 이름 생각안나서 card
export const MainCard = () => {
  return (
    <article>
      <Empty size="5rem" />

      <Text size="H5" text="영어 작문의 꾸준한 첫걸음," />
      <Empty size="1rem" />
      {/* [Todo] 시멘틱웹을 고려해 h태그로 고치기 */}
      <OCOC_title  style={{  width: '9.43rem', height: '2.563rem', fill: 'var(--Green)' }} />
      <Empty size="2.9rem" />
      <img class = 'mockupimg' src={Phone_img} style={{width:'16.9rem'}} />
      <Button style={{ position: 'absolute', top:'43.12rem'}} />
    </article>
  );
};
