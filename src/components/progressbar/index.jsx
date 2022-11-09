import React from 'react';
import style from './index.module.css';
import { FaRegTimesCircle } from 'react-icons/fa';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

//<button className={style.progress_icon}><FaRegTimesCircle /></button>

function ProgressBar1({ value }) {
  return (
    <>
      <div className={style.progress_navbar}>
        <ProgressBar percent={value} unfilledBackground="var(--Gray-3)" filledBackground="var(--Green)" height="0.5rem">
          <Step transition="scale">{({ accomplished }) => <span className={accomplished ? style.circleGr : style.circle}></span>}</Step>
          <Step transition="scale">{({ accomplished }) => <span className={accomplished ? style.circleGr : style.circle}></span>}</Step>
          <Step transition="scale">{({ accomplished }) => <span className={accomplished ? style.circleGr : style.circle}></span>}</Step>
          <Step transition="scale">{({ accomplished }) => <span className={accomplished ? style.circleGr : style.circle}></span>}</Step>
        </ProgressBar>
      </div>
    </>
  );
}

export default ProgressBar1;
