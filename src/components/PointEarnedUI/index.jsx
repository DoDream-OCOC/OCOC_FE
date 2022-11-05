import React from 'react';
import { Text } from '../element';
import styled from './index.module.css';

export const PointEarnedUI = ({ isGrading, isCrtAns, pointEarned }) => {
  return (
    isGrading && (
      <div id={styled.pointEarnedUI} className={isCrtAns ? styled.green : styled.red}>
        <Text size="H3" color="Text-2" content={isCrtAns ? '맞았습니다!' : '틀렸습니다!'} />
        {isCrtAns && <Text size="H2" color="Text-2" content={`+${pointEarned}`} />}
      </div>
    )
  );
};
