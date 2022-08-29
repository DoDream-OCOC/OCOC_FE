import React from 'react';

import style from './index.module.css';
import { ReactComponent as Logo } from '../../../assets/fake/logo.svg';
import { Text } from '../../element';

function MainHeader() {
  return (
    <header>
      <div className={style.flex}>
        <Logo title="header-logo" style={{ marginRight: '0.5rem' }} />
        <Text size="M" content={'Logo here'} />
      </div>
      <div title="header-hamburger">hamburger</div>
    </header>
  );
}

export default MainHeader;
