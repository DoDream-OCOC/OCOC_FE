import React from 'react';
import style from './index.module.css';
import { FaRegTimesCircle } from 'react-icons/fa';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import Turtle from '../Turtle';

//<button className={style.progress_icon}><FaRegTimesCircle /></button>

function ProgressBar1({ value }) {
  const margin = value - 3.5 + '%';
  return (
    <>
      <div className={style.progress_navbar}>
        <div style={{ marginLeft: margin, display: 'flex', height: '1.5rem', overflow: 'hidden', justifyContent: 'flex-start' }}>
          <Turtle scale="3rem" />
        </div>
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
