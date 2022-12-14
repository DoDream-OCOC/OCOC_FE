import React from 'react';
import { Text } from '../../../components/element';
import { ReactComponent as Star } from '../../../assets/icons/Star_border.svg';
import style from './index.module.css';

const Profile = ({ userName, highScore, speed }) => {
  return (
    <section>
      <div style={{ display: 'flex', alignItems: 'left', width: '100%' }}>
        <Text size="H3" content="랭킹" />
      </div>
      <div className={style.profile_wrapper}>
        <div className={style.name_wrapper}>
          <Text size="H4" color="black" content={`${userName}님`} />
        </div>
        <div className={style.record_wrapper}>
          <div className={style.record_score}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star />
              <Text size="B1" color="black" content="최고점수" />
            </div>
            <div style={{ textAlign: 'right' }}>
              <Text size="H4" color="black" content={`${highScore}점`} />
            </div>
          </div>
          <div className={style.record_speed}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star />
              <Text size="B1" color="black" content="평균속도" />
            </div>
            <div style={{ textAlign: 'right' }}>
              <Text size="H4" color="black" content={`${parseInt(speed / 1000)}초/문장`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
