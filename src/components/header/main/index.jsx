import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './index.module.css';
import { ReactComponent as Logo } from '../../../assets/fake/logo.svg';
import { Text } from '../../element';

function MainHeader() {
  const navigate = useNavigate();

  return (
    <header>
      <div className={style.flex} onClick={() => navigate('/')}>
        <Logo title="header-logo" style={{ marginRight: '0.5rem' }} />
        <Text size="M" content={'Logo here'} />
      </div>
      <div title="header-hamburger">hamburger</div>
    </header>
  );
}

export default MainHeader;
