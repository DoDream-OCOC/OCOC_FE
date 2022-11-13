import React from 'react';
import { Text } from '../element';
import styled from './index.module.css';
import Lottie from 'lottie-react';
import check_true from '../../assets/check/check_true.json';
import check_false from '../../assets/check/check_false.json';

export const PointEarnedUI = ({ isGrading, isCrtAns, pointEarned }) => {
  if (isCrtAns == true) {
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
          <Lottie id={styled.pointEarnedUI} animationData={check_false} />
        </div>
      )
    );
};

// export const PointEarnedUI = ({ isGrading, isCrtAns, pointEarned }) => {
//   return (
//     isGrading && (
//       <div id={styled.pointEarnedUI} className={isCrtAns ? styled.green : styled.red}>
//         <Text size="H3" color="Text-2" content={isCrtAns ? '맞았습니다!' : '틀렸습니다!'} />
//         {isCrtAns && <Text size="H2" color="Text-2" content={`+${pointEarned}`} />}
//       </div>
//     )
//   );
// };
