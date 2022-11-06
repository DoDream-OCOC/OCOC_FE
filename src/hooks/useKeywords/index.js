import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useGradedUI, useModal, useLife } from '../../hooks';
import { gameSlice } from '../../store/slices';

import { question } from '../../apis';
import { gradeStudy } from '../../utils/gradeStudy';
import shortid from 'shortid';
import { PlayGameModal } from './modal';

function useKeywords() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Modal, openModal, closeModal } = useModal();
  const { clause, english, words, id } = useSelector(state => state.game.datasets[state.game.stage]);
  const { studyId, results, stage } = useSelector(state => state.game);
  const { isCrtAns, isGrading, stageRes, gradeGame, TimerUI, PointEarnedUI } = useGradedUI({ level: parseInt(stage / 10) + 1 });
  const { LifeState } = useLife();

  const mutation = useMutation({
    mutationFn: () => question.getQuestion(studyId),
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

  //스테이지 증가
  const onIncreaseStage = () => {
    const strNewKeywords = newKeywords.map(t => t.text).join(' ');
    const isCorrectAnswer = gradeStudy(strNewKeywords, english, id);

    if (!isCorrectAnswer) {
      dispatch(gameSlice.actions.isNotCrtAnswer());
    }

    gradeGame(isCorrectAnswer, () => {
      setNewKeywords([]);
      dispatch(gameSlice.actions.increaseStage());
    });

    return isCrtAns;
  };

  //stage 10 되면 Modal 실행되게 하기
  const onFinishStage = () => {
    const strNewKeywords = newKeywords.map(t => t.text).join(' ');
    const isCorrectAnswer = gradeStudy(strNewKeywords, english, id);

    gradeGame(isCorrectAnswer, () => {
      mutation.mutate();
      openModal();
    });

    return isCorrectAnswer;
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

  return {
    keywords,
    newKeywords,
    setKeywords,
    setNewKeywords,
    createKeywordsId,
    insertButton,
    removeButton,
    onIncreaseStage,
    onFinishStage,
    isGrading,
    isCrtAns,
    TimerUI,
    PointEarnedUI,
    ShowModal,
    LifeState,
  };
}

export default useKeywords;
