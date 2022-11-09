import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { gameSlice } from '../../store/slices';
import { useKeywords } from '../../hooks';

import { NavBar, ProgressBar1, MainContainer, QuestionContainer } from '..';
import style from './index.module.css';

function BlankPage() {
  const { korean } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  const { stage } = useSelector(state => state.game);
  const { isCrtAns, TimerUI, LifeState } = useKeywords();

  return (
    <>
      <div className={style.container}>
        <ProgressBar1 value={(stage - 1) * 10} />
        <TimerUI />
        <div className={style.relative}>
          <QuestionContainer content={korean} />
        </div>
        <LifeState />
      </div>
    </>
  );
}

export default BlankPage;
