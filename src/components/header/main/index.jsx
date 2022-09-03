import React from 'react';

import style from './index.module.css';
import { ReactComponent as Logo } from '../../../assets/fake/logo.svg';
import { ReactComponent as OCOC_title} from '../../../assets/OCOC/OCOC_text.svg';
import { ReactComponent as Profile} from '../../../assets/icons/icon_profile.svg';
import { Text } from '../../element';

// todo 로고랑 타이틀 누르면 메인페이지로 이동
function MainHeader() {
  return (
    <header>
      <div className={style.flex}>
        <Logo style={{ marginRight: '0.5rem' }} />
        <OCOC_title style={{ width: '3.87rem', height: '1.06rem' , fill:'var(--Black)'}} />
      </div>
      <div>
        <Profile />
      </div>
    </header>
  );
}

export default MainHeader;
