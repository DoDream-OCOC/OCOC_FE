import React from 'react';
import { Text } from '../element';
import styled from './index.module.css';

// 시간 다 되면 틀렸습니다
function PointEarnedUI({ isGrading, isCrtAns, pointEarned }) {
  return (
    isGrading && (
      <div id={styled.pointEarnedUI} className={isCrtAns ? styled.green : styled.red}>
        <Text size="H3" color="Text-2" content={isCrtAns ? '맞았습니다!' : '틀렸습니다!'} />
        <Text size="H2" color="Text-2" content={`+${pointEarned}`} />
      </div>
    )
  );
}

export default PointEarnedUI;
