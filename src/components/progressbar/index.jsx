import React from 'react';
import style from './index.module.css';
import { FaRegTimesCircle } from 'react-icons/fa';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

//<button className={style.progress_icon}><FaRegTimesCircle /></button>

function ProgressBar({ value }) {
  return (
    <>
      <nav className={style.progress_navbar}>
        <button className={style.progress_icon}>
          <FaRegTimesCircle />
        </button>

        <progress className={style.progress} value={value} max="10"></progress>
      </nav>
    </>
  );
}

export default ProgressBar1;
