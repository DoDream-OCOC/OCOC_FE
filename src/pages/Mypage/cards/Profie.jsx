import React from 'react';
import { Text, Empty, Button } from '../../../components/element';
import style from './index.module.css';

export const Profile = () => {
  return (
    <section>
      <div className={style.profile_wrapper}>
        <div className={style.name_wrapper}>
          <Text size="H4" color="black" content="dali1174@,,," />
          <Text size="B3" color="black" content=" 획득 업적 > " />
        </div>
        <div className={style.record_wrapper}>
          <div className={style.record_score}>
            <Text size="B1" color="black" content="최고점수" />
            <Text size="H4" color="black" content="1234점" />
          </div>
          <div className={style.record_speed}>
            <Text size="B1" color="black" content="평균속도" />
            <Text size="H4" color="black" content="123/분" />
          </div>
        </div>
      </div>
    </section>
  );
};
