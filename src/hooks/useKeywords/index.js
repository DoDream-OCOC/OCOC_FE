import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useGradedUI, useModal, useLife } from '../../hooks';
import { gameSlice } from '../../store/slices';

import { setQuestions } from '../../utils/setQuestions';
import shortid from 'shortid';
import { PlayGameModal } from './modal';

function useKeywords() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Modal, openModal } = useModal();
  const { clause, english, words, id } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  const { studyId, stage } = useSelector(state => state.game);
  const { isCrtAns, isGrading, isTimeOut, stageRes, gradeGame, TimerUI, PointEarnedUI } = useGradedUI({ level: parseInt(stage / 10) + 1 });
  const { LifeState } = useLife();

  const mutation = useMutation({
    // [Todo] 결과 모달에 들어갈 정보 요청
    mutationFn: () => {},
  });

  const [keywords, setKeywords] = React.useState([]); //words 배열
  const [newKeywords, setNewKeywords] = React.useState([]); //answerList에 넣을 배열

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

  //빈칸 영작
  const [sentences, setSentences] = React.useState();
  const engSplit = english.split(' '); //english 띄어쓰기 기준으로 나눈 배열

  const createSentence = () => {
    let _sentence = [];
    for (let i = 0; i < clause; i++) {
      let id = i;
      let text = engSplit[i];
      _sentence.push({ id, text });
    }
    return _sentence;
  };

  //스테이지 증가
  const onNextStage = () => {
    const strNewKeywords = newKeywords.map(t => t.text).join(' ');

    gradeGame({ strNewKeywords, english, id }, async () => {
      setNewKeywords([]);
      if (stage % 10 === 0) await setQuestions(studyId, parseInt((stage + 1) / 10) + 1);
      dispatch(gameSlice.actions.increaseStage());
      dispatch(gameSlice.actions.setStudyResult({ elapsedT: stageRes.elapsedT, pointEarned: stageRes.pointEarned, isCrtAns }));
    });
  };

  // 마지막 stage또는 라이프가 전부 소멸됬을 경우
  const handleGameOver = () => {
    mutation.mutate();
    openModal();
    console.log(stageRes);
    // [Todo] 그다음에 싹 다 멈춰야 됨
    // [Error] 소요시간 에러
  };

  //모달 창 띄우기
  const ShowModal = () => {
    return (
      <>
        <Modal>
          {/*[Temp] onLogin 일단 보류*/}
          <PlayGameModal onBackToMain={() => navigate('/')} />
        </Modal>
      </>
    );
  };

  React.useEffect(() => {
    if (isTimeOut) onNextStage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimeOut]);

  return {
    keywords,
    newKeywords,
    setKeywords,
    setNewKeywords,
    createKeywordsId,
    insertButton,
    removeButton,
    onNextStage,
    handleGameOver,
    isGrading,
    isCrtAns,
    TimerUI,
    PointEarnedUI,
    ShowModal,
    LifeState,
    sentences,
    setSentences,
    engSplit,
    createSentence,
  };
}

export default useKeywords;
