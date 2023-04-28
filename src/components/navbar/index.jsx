import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signSlice } from '../../store/slices';
import { useDispatch } from 'react-redux';
import { isSigned } from '../../utils/isSigned';

import style from './index.module.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as OCOCTitle } from '../../assets/OCOC/OCOC_text.svg';
import { ReactComponent as Profile } from '../../assets/icons/icon_profile.svg';
import { Text } from '../element';

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //setting mobile nav..?
  //const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);

  // add nav border when scrolling
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 10) setColor(true);
    else setColor(false);
  };

  const signOut = () => {
    dispatch(signSlice.actions.clearToken());
    navigate('/');
  };

  window.addEventListener('scroll', changeColor);

  return (
    <>
      <div className={color ? [style.navborder, style.Navbar].join(' ') : style.Navbar}>
        <div className={style.navbar_wrapper}>
          {/* 비회원일 때는 /, 회원일때는 my-page */}
          <div className={style.flex} onClick={isSigned() ? () => navigate('/my-page') : () => navigate('/')}>
            <Logo style={{ marginRight: '0.5rem' }} />
            <OCOCTitle style={{ width: '3.87rem', height: '1.06rem', fill: 'var(--Black)' }} />
          </div>
          <div style={{ display: 'flex' }}>
            {/* [Temp] 일단 로그인 창으로만 이동 */}
            {window.location.pathname === '/my-page' ? (
              <Text style={{ cursor: 'pointer' }} content="로그아웃" onClick={signOut} />
            ) : (
              <Profile style={{ cursor: 'pointer' }} onClick={isSigned() ? () => navigate('/my-page') : () => navigate('/sign-in')} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
