import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { useGradedUI, useModal } from '../../hooks';
import { studySlice } from '../../store/slices/study';

import { study } from '../../apis';
import { gradeStudy } from '../../utils/gradeStudy';
import shortid from 'shortid';

function useKeywords(){

  const dispatch = useDispatch();
  const { openModal } = useModal();
  const [isCorrectBtn, isGrading, showGradedUI] = useGradedUI();
  const { clause, english, words, id } = useSelector(state => state.study.datasets[state.study.stage - 1]);
  const { studyId, results } = useSelector(state => state.study);

  const mutation = useMutation({
    mutationFn: data => study.sendStudyResult(results, studyId),
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

  const onIncreaseStage = () => {
    const strNewKeywords = newKeywords.map(t => t.text).join(' ');
    const isCorrectAnswer = gradeStudy(strNewKeywords, english, id);

    showGradedUI(isCorrectAnswer, () => {
      setNewKeywords([]);
      dispatch(studySlice.actions.increaseStage());
    });

    return isCorrectBtn;
  };

  //stage 10 되면 Modal 실행되게 하기
  const onFinishStage = () => {
    const strNewKeywords = newKeywords.map(t => t.text).join(' ');
    const isCorrectAnswer = gradeStudy(strNewKeywords, english, id);

    showGradedUI(isCorrectAnswer, () => {
      mutation.mutate();
      openModal();
    });
  };
    
  return {keywords, newKeywords, setKeywords, setNewKeywords, createKeywordsId, insertButton, removeButton, onIncreaseStage, onFinishStage, isCorrectBtn};
}

export default useKeywords;