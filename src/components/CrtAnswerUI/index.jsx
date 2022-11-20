import React from 'react';
import { useSelector } from 'react-redux';
import style from './index.module.css';
import { Empty, Text } from '../element';

export const CrtAnswerUI = ({ isGrading, isCrtAns }) => {
  const { english, questionType } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  if (isCrtAns === false) {
    if (questionType === 'CLICK') {
      return (
        isGrading && (
          <>
            <div className={style.click_answer}>
              <Text size="B2" content={english} />
            </div>
          </>
        )
      );
    } else {
      return (
        isGrading && (
          <>
            <div className={style.blank_answer}>
              <Text size="B2" content={english} />
            </div>
          </>
        )
      );
    }
  }
};
