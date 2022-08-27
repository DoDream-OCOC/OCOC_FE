import React from 'react';

import style from './index.module.css';
import { ReactComponent as Logo } from '../../../assets/fake/logo.svg';
import { Text } from '../../element';

function MainHeader() {
  return (
    <header>
      <div className={style.flex}>
        <Logo style={{ marginRight: '0.5rem' }} />
        <Text size="M-bold" text={'Logo here'} />
      </div>
      <div>hamburger</div>
    </header>
  );
}

export default MainHeader;
