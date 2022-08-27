import React from 'react';

import style from './index.module.css';
import { ReactComponent as Logo } from '../../../assets/fake/logo.svg';

function MainHeader() {
  return (
    <header>
      <Logo />
    </header>
  );
}

export default MainHeader;
