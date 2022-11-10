import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { gameSlice } from '../../store/slices';
import { useKeywords } from '../../hooks';

import { NavBar, MainContainer, ClickPage, BlankPage } from '../../components';
import { Empty, GradingButton } from '../../components/element';

function PlayGame() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { stage, life } = useSelector(state => state.game);
  const { keywords, onNextStage, handleGameOver, isGrading, PointEarnedUI, ShowModal, setKeywords, newKeywords, createKeywordsId, insertButton, removeButton, isCrtAns, TimerUI, LifeState } =
    useKeywords();

  React.useLayoutEffect(() => {
    if (life <= 0 || stage === 31) handleGameOver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [life]);

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
          <ClickPage
            keywords={keywords}
            setKeywords={setKeywords}
            newKeywords={newKeywords}
            createKeywordsId={createKeywordsId}
            insertButton={insertButton}
            removeButton={removeButton}
            isCrtAns={isCrtAns}
            TimerUI={TimerUI}
            LifeState={LifeState}
          />
          <PointEarnedUI />
          <GradingButton content="정답 확인하기" isDisabled={keywords.length > 0 || isGrading} onClick={life >= 1 ? onNextStage : null} />
          <Empty size="1rem" />
        </article>
      </MainContainer>
    </>
  );
}

export default PlayGame;
