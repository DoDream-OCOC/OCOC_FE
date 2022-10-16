import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { studySlice } from '../../store/slices/study';
import { useMutation } from 'react-query';
import { useKeywords, useStage, useInitialRender, useModal, useGradedUI } from '../../hooks';

import { NavBar, ProgressBar, MainContainer, QuestionContainer } from '../../components';
import { Empty, GradingButton } from '../../components/element';
import Button from './buttons/Button';
import style from './index.module.css';


//일단 분리는 해 놨는데 왜 안 돌아가는지 보자...
//재사용할 수 있게 함수 변형하자

// [Error] keywords에 빈 요소가 들어가는 것같음 -> 빈 UI가 생성됨
function ClickEng() {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { korean } = useSelector(state => state.study.datasets[state.study.stage - 1]);
  const { stage } = useSelector(state => state.study);
  const { keywords, newKeywords, setKeywords, setNewKeywords, createKeywordsId } = useKeywords();
  const {insertButton, removeButton, onIncreaseStage, onFinishStage} = useStage();
  const initialRender = useInitialRender();
  const {Modal, ClickEngModal} = useModal();
  const [isCorrectBtn, isGrading, showGradedUI] = useGradedUI();
  
  React.useLayoutEffect(() => {
    setKeywords(() => createKeywordsId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

 
  React.useEffect(() => {
    //useInitialRender
    initialRender();
  }, [location, dispatch]);

  return (
    <>
      <NavBar />
      <Modal>
        {/* [Temp] onLogin 일단 보류 */}
        <ClickEngModal onBackToMain={() => navigate('/')} />
      </Modal>
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
