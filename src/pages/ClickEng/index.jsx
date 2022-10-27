import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGradedUI,  useInitialRender, useKeywords } from '../../hooks';

import { NavBar, ProgressBar, MainContainer, QuestionContainer } from '../../components';
import { Empty, GradingButton } from '../../components/element';
import Button from './buttons/Button';
import style from './index.module.css';


function ClickEng() {

  const location = useLocation();
  const dispatch = useDispatch();
  const [ isGrading, showGradedUI ] = useGradedUI();
  const { korean } = useSelector(state => state.study.datasets[state.study.stage - 1]);
  const { stage } = useSelector(state => state.study);
  const { keywords, newKeywords, setKeywords, createKeywordsId, insertButton, removeButton, onIncreaseStage, onFinishStage, isCorrectBtn, ShowModal} = useKeywords();
  const initialRender = useInitialRender();
  
  React.useLayoutEffect(() => {
    setKeywords(() => createKeywordsId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);
 
  React.useEffect(() => {
    initialRender();
  }, [location, dispatch]);

  return (
    <>
      <NavBar />
      <ShowModal />
      <MainContainer>
        <article>
          <div className={style.container}>
            <ProgressBar value={stage} />
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