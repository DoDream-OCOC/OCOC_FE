import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { studySlice } from '../../store/slices';
import { useGradedUI, useKeywords } from '../../hooks';

import { NavBar, ProgressBar1, MainContainer, QuestionContainer } from '../../components';
import { Empty, GradingButton } from '../../components/element';
import Button from './buttons/Button';
import style from './index.module.css';

function ClickEng() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isGrading, showGradedUI] = useGradedUI();
  const { korean } = useSelector(state => state.study.datasets[state.study.stage - 1]);
  const { stage } = useSelector(state => state.study);
  const { keywords, newKeywords, setKeywords, createKeywordsId, insertButton, removeButton, onIncreaseStage, onFinishStage, isCorrectBtn, ShowModal } = useKeywords();

  React.useLayoutEffect(() => {
    setKeywords(() => createKeywordsId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  const initialRender = React.useRef(true);
  React.useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      return () => dispatch(studySlice.actions.cleanAllCorpus());
    }
  }, [location, dispatch]);

  return (
    <>
      <NavBar />
      <ShowModal />
      <MainContainer>
        <article>
          <div className={style.container}>
            <ProgressBar1 value={(stage - 1) * 10} />
            <div className={style.relative}>
              <QuestionContainer content={korean} />
              <div className={style.absolute}>
                <Button isCorrect={isCorrectBtn} keywords={newKeywords} onClick={removeButton} />
              </div>
            </div>
            <div className={style.button_keyword_container}>
              <div className={style.button_default_container}>
                <Button keywords={keywords} onClick={insertButton} />
              </div>
            </div>
          </div>
          <GradingButton content="정답 확인하기" isDisabled={keywords.length > 0 || isGrading} onClick={stage >= 10 ? onFinishStage : onIncreaseStage} />
          <Empty size="1rem" />
        </article>
      </MainContainer>
    </>
  );
}

export default ClickEng;
