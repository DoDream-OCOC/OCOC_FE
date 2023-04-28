import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useGradedUI, useModal, useLife } from '../../hooks';
import { gameSlice } from '../../store/slices';
import { score } from '../../apis';
import { setQuestions } from '../../utils/setQuestions';
import shortid from 'shortid';
import { ResultModal } from './modal';
import { isSigned } from '../../utils/isSigned';

function useKeywords() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Modal, openModal } = useModal();
  const { clause, english, words, id, blankIndex } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  const { studyId, stage, results } = useSelector(state => state.game);
  const { isCrtAns, isGrading, isTimeOut, stop, gradeGame, TimerUI, PointEarnedUI, CrtAnswerUI } = useGradedUI({ level: parseInt(stage / 10) + 1 });
  const { LifeState } = useLife();
  const [resState, setResState] = React.useState({
    bestScore: 0,
    diffValue: 0,
    newRecord: true,
    score: 0,
    speed: 0,
    topPercent: 0,
  });

  const mutation = useMutation({
    mutationFn: async ({ tScore, avrSpeed, studyId }) =>
      await score.postScore(tScore, avrSpeed, studyId).then(res => {
        setResState({
          bestScore: res.bestScore,
          diffValue: res.diffValue,
          newRecord: res.newRecord,
          score: res.score,
          speed: res.speed,
          topPercent: res.topPercent,
        });
        return res;
      }),
    onSuccess: res => console.log(res),
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

  //버튼 onClick 애니메이션을 위한 useState
  const [fadeInOut, setFadeInOut] = React.useState(false);

  //영작 칸에 띄울 단어 배열
  const insertButton = id => {
    setNewKeywords(newKeywords.concat(keywords.filter(keyword => keyword.id === id)));
    setKeywords(keywords.filter(keyword => keyword.id !== id));
    setFadeInOut(null);
    setFadeInOut(false);
  };

  //영작 칸에서 클릭한 버튼의 배열 제거
  const removeButton = id => {
    setKeywords(keywords.concat(newKeywords.filter(keyword => keyword.id === id)));
    setNewKeywords(newKeywords.filter(keyword => keyword.id !== id));
    setFadeInOut(null);
    setFadeInOut(false);
  };

  //빈칸 영작
  const [sentences, setSentences] = React.useState();
  const engSplit = english.split(' '); //english 띄어쓰기 기준으로 나눈 배열
  const [blankText, setBlankText] = React.useState(); //input에 들어갈 값 state

  const createSentence = () => {
    let _sentence = [];
    for (let i = 0; i < clause; i++) {
      let id = i;
      let text = engSplit[i];
      _sentence.push({ id, text });
    }
    return _sentence;
  };

  //input 입력을 위한 onChange 함수
  const onChange = useCallback(e => {
    setBlankText(e.target.value);
  }, []);

  // 스테이지 증가
  // [Todo] 코드가 뭘 하는지 알 수가 없음
  const onNextStage = () => {
    const strNewKeywords = newKeywords.map(t => t.text).join(' ');
    const answerText = engSplit[blankIndex + 2];

    if (blankIndex > -1) {
      gradeGame({ userAnswer: blankText, answer: answerText, datasetId: id }, async () => {
        setBlankText('');
        if (stage % 10 === 0) await setQuestions(studyId, parseInt((stage + 1) / 10) + 1);
        dispatch(gameSlice.actions.increaseStage());
      });
    } else {
      gradeGame({ userAnswer: strNewKeywords, answer: english, datasetId: id }, async () => {
        setNewKeywords([]);
        if (stage % 10 === 0) await setQuestions(studyId, parseInt((stage + 1) / 10) + 1);
        dispatch(gameSlice.actions.increaseStage());
      });
    }
  };

  // 마지막 stage또는 라이프가 전부 소멸됬을 경우
  const handleGameOver = () => {
    mutation.mutate({ tScore: results.score, avrSpeed: results.avrSpeed, studyId });
    stop();
    openModal();
  };

  //모달 창 띄우기
  const ShowModal = () => {
    return (
      <>
        <Modal>
          {/*[Temp] onLogin 일단 보류*/}
          <ResultModal resState={resState} onBackToMain={() => navigate('/')} />
        </Modal>
      </>
    );
  };

  React.useEffect(() => {
    if (isTimeOut) onNextStage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimeOut]);

  React.useEffect(() => {
    if (!isSigned()) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    blankText,
    onChange,
    CrtAnswerUI,
    fadeInOut,
  };
}

export default useKeywords;
