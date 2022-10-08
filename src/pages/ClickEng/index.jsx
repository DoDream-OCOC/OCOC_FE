import React from 'react';
import { useLocation } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { studySlice } from '../../store/slices/study';
import { useMutation } from 'react-query';

import { study } from '../../apis';
import { gradeStudy } from '../../utils/gradeStudy';

import { NavBar, ProgressBar, MainContainer } from '../../components';
import style from './index.module.css';
import { Empty, Text } from '../../components/element';
import Button from './buttons/Button';
import { GradingButton } from '../../components/element';
import shortid from 'shortid';
import QuestionContainer from '../../hooks/QuestionContainer';

// [Error] keywords에 빈 요소가 들어가는 것같음 -> 빈 UI가 생성됨
function ClickEng() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { Modal, openModal } = useModal();

  const { korean, clause, english, words, id } = useSelector(state => state.study.datasets[state.study.stage - 1]);
  const { stage, studyId, results } = useSelector(state => state.study);

  const mutation = useMutation({
    mutationFn: data => study.sendStudyResult({ results, studyId }),
  });

  const [keywords, setKeywords] = React.useState([]); //words 배열
  const [newKeywords, setNewKeywords] = React.useState([]); //answerList에 넣을 배열
  const [isCorrect, setIsCorrect] = React.useState(null);

  // Create keywords's random id
  const createKeywordsId = () => {
    let _keywords = [];
    for (let i = 0; i < clause; i++) {
      let id = shortid.generate();
      let text = words[i];
      _keywords.push({ id, text });
    }
    return _keywords;
  };

  // answerList = newKeywords; //store에 답변 리스트 저장

  //영작 칸에 띄울 단어 배열
  const insertButton = id => {
    setNewKeywords(newKeywords.concat(keywords.filter(keyword => keyword.id === id)));
    setKeywords(keywords.filter(keyword => keyword.id !== id));
  };

  //영작 칸에서 클릭한 버튼의 배열 제거
  const removeButton = id => {
    setKeywords(keywords.concat(newKeywords.filter(keyword => keyword.id === id)));
    setNewKeywords(newKeywords.filter(keyword => keyword.id !== id));
  };

  //콘솔창
  // console.log(keywords);
  // console.log(newKeywords);
  // console.log(stage);

  // [Todo] 네이밍이 별로며, callback을 줘야되서 하는 일이 많음
  const showGradedUI = (isCorrect, callback) => {
    setIsCorrect(isCorrect);
    setTimeout(() => callback(), 1500);
  };

  const onIncreaseStage = () => {
    const strNewKeywords = newKeywords.map(t => t.text).join(' ');
    const isCorrect = gradeStudy(strNewKeywords, english, id);

    showGradedUI(isCorrect, () => {
      setNewKeywords([]);
      dispatch(studySlice.actions.increaseStage());
    });
  };

  const onFinishStage = () => {
    const strNewKeywords = newKeywords.map(t => t.text).join(' ');
    const isCorrect = gradeStudy(strNewKeywords, english, id);

    showGradedUI(isCorrect, () => {
      mutation.mutate();
      openModal();
    });
  };

  React.useLayoutEffect(() => {
    setKeywords(() => createKeywordsId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  // [Todo] Hook으로 빼기
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
      <Modal>
        <div>hello</div>
      </Modal>
      <MainContainer>
        <article>
          <div className={style.container}>

            <ProgressBar value={stage} />

            <div className={style.relative}>
              <QuestionContainer content={korean} />
              <div className={style.absolute}>
                <Button isCorrect={isCorrect} keywords={newKeywords} onClick={removeButton} />
              </div> 
            </div> 

            <div className={style.button_keyword_container}>
              <div className={style.button_default_container}>
                <Button keywords={keywords} onClick={insertButton} />
              </div>
            </div>

          </div>

          <GradingButton content="정답 확인하기" isDisabled={keywords.length > 0} onClick={stage >= 10 ? onFinishStage : onIncreaseStage} />
          <Empty size="1rem" />
        </article>
      </MainContainer>
    </>
  );
}

export default ClickEng;
