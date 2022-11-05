import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { gameSlice } from '../../store/slices';
import { useKeywords } from '../../hooks';

import { NavBar, ProgressBar1, MainContainer, QuestionContainer } from '../../components';
import { Empty, GradingButton } from '../../components/element';
import Button from './buttons/Button';
import style from './index.module.css';
import { ReactComponent as Life } from '../../assets/icons/life.svg';

function PlayGame() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { korean } = useSelector(state => state.game.datasets[state.game.stage]);
  const { stage } = useSelector(state => state.game);
  const { keywords, newKeywords, setKeywords, setNewKeywords, createKeywordsId, insertButton, removeButton, onIncreaseStage, onFinishStage, isGrading, isCrtAns, TimerUI, PointEarnedUI, ShowModal } =
    useKeywords();

  React.useLayoutEffect(() => {
    setKeywords(() => createKeywordsId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  const initialRender = React.useRef(true);
  React.useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      return () => dispatch(gameSlice.actions.cleanAllCorpus());
    }
  }, [location, dispatch]);

  return (
    <>
      <NavBar />
      <ShowModal />
      <MainContainer>
        <article>
          <div className={style.container}>
            <ProgressBar1 value={stage * 10} />
            <TimerUI />
            <div className={style.relative}>
              <QuestionContainer content={korean} />
              <div className={style.absolute}>
                <Button isCorrect={isCrtAns} keywords={newKeywords} onClick={removeButton} />
              </div>
            </div>

            <div className={style.life_container}>
              <Life className={style.life} width="23" height="23" />
              <Life className={style.life} width="23" height="23" />
              <Life className={style.life} width="23" height="23" />
            </div>

            <div className={style.button_keyword_container}>
              <div className={style.button_default_container}>
                <Button keywords={keywords} onClick={insertButton} />
              </div>
            </div>
          </div>
          <PointEarnedUI />
          <GradingButton content="정답 확인하기" isDisabled={keywords.length > 0 || isGrading} onClick={stage >= 10 ? onFinishStage : onIncreaseStage} />
          <Empty size="1rem" />
        </article>
      </MainContainer>
    </>
  );
}

export default PlayGame;
