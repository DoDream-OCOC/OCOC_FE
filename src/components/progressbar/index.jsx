import React from 'react';
import style from './index.module.css';
import { FaRegTimesCircle } from 'react-icons/fa';

// [Todo] 새로운 UI로 바꾸어야 함
function ProgressBar({ value, max = 10 }) {
  return (
    <>
      <nav className={style.progress_navbar}>
        <button className={style.progress_icon}>
          <FaRegTimesCircle />
        </button>

        <progress className={style.progress} value={value} max={max}></progress>
      </nav>
    </>
  );
}

export default ProgressBar;
