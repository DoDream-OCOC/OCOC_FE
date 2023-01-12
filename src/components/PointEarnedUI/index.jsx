import React from 'react';
import styled from './index.module.css';
import Lottie from 'lottie-react';
import check_true from '../../assets/check/check_true.json';
import check_false from '../../assets/check/check_false.json';

export const PointEarnedUI = ({ isGrading, isCrtAns }) => {
  if (isCrtAns === true) {
    return (
      isGrading && (
        <div id={styled.pointEarnedUI}>
          <Lottie id={styled.pointEarnedUI} animationData={check_true} />
        </div>
      )
    );
  } else
    return (
      isGrading && (
        <div id={styled.pointEarnedUI}>
          <Lottie id={styled.pointEarnedUI} animationData={check_false} loop={false} />
        </div>
      )
    );
};
