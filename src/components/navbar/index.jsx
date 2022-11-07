import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './index.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as OCOCTitle } from '../../assets/OCOC/OCOC_text.svg';
import { ReactComponent as Profile } from '../../assets/icons/icon_profile.svg';
import { Button } from '../element';

function NavBar() {
  const navigate = useNavigate();

  //setting mobile nav..?
  //const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);

  // add nav border when scrolling
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // [Todo] Token유무
  const isSigned = false;

  window.addEventListener('scroll', changeColor);

  return (
    <>
      <div className={color ? [style.navborder, style.Navbar].join(' ') : style.Navbar}>
        <div className={style.navbar_wrapper}>
          <div className={style.flex} onClick={() => navigate('/')}>
            <Logo style={{ marginRight: '0.5rem' }} />
            <OCOCTitle style={{ width: '3.87rem', height: '1.06rem', fill: 'var(--Black)' }} />
          </div>
          <div style={{ display: 'flex' }}>
            <div className={style.mobileapp}>
              <Button style={{ width: '4rem', height: '2rem' }} onClick={() => navigate('/')}>
                APP
              </Button>
            </div>
            {/* [Temp] 일단 로그인 창으로만 이동 */}
            <Profile onClick={isSigned ? '' : () => navigate('/sign-in')} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
