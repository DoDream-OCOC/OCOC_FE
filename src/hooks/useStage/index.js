import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { studySlice } from '../../store/slices/study';
import { useMutation } from 'react-query';
import { useGradedUI, useInitialRender, useModal, useKeywords } from '../../hooks';

import { study } from '../../apis';
import { gradeStudy } from '../../utils/gradeStudy';

import { NavBar, ProgressBar, MainContainer, QuestionContainer } from '../../components';
import { Empty, GradingButton } from '../../components/element';
import Button from '../../pages/ClickEng/buttons/Button';
import shortid from 'shortid';

function useStage(){

    const dispatch = useDispatch();
    const { Modal, openModal } = useModal();
    const [isCorrectBtn, isGrading, showGradedUI] = useGradedUI();
  
    const { korean, clause, english, words, id } = useSelector(state => state.study.datasets[state.study.stage - 1]);
    const { stage, studyId, results } = useSelector(state => state.study);
    const { keywords, newKeywords, setKeywords, setNewKeywords } = useKeywords();
  
    const mutation = useMutation({
      mutationFn: data => study.sendStudyResult(results, studyId),
    });
  
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
  
    const onIncreaseStage = () => {
      const strNewKeywords = newKeywords.map(t => t.text).join(' ');
      const isCorrectAnswer = gradeStudy(strNewKeywords, english, id);
  
      showGradedUI(isCorrectAnswer, () => {
        setNewKeywords([]);
        dispatch(studySlice.actions.increaseStage());
      });
    };
  
    const onFinishStage = () => {
      const strNewKeywords = newKeywords.map(t => t.text).join(' ');
      const isCorrectAnswer = gradeStudy(strNewKeywords, english, id);
  
      showGradedUI(isCorrectAnswer, () => {
        mutation.mutate();
        openModal();
      });
    };
  

    return {insertButton, removeButton, onIncreaseStage, onFinishStage};
}

export default useStage;