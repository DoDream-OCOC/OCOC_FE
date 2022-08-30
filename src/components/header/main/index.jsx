import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './index.module.css';
import { ReactComponent as Logo } from '../../../assets/fake/logo.svg';
import { Text } from '../../element';
import Hamburger from './Hamburger';


function MainHeader() {
  const navigate = useNavigate();

  return (
    <>
    <header>
      <div className={style.flex} onClick={() => navigate('/')}>
        <div title="header-hamburger"><Hamburger /></div>
      </div>  
    </header>
    </>
  );
}

export default MainHeader;
