import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { studySlice } from '../../store/slices/study';

import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import style from './index.module.css';
import { Empty, Text } from '../../components/element';
import ProgressBar from '../../components/progressbar';
import Button from './buttons/Button';
import { GradingButton } from '../../components/element';
import store from '../../store';
import shortid from 'shortid';
import { gradeStudy } from '../../utils/gradeStudy';
import { array } from 'prop-types';

function ClickEng() {
  const dispatch = useDispatch();
  const { korean, length, english } = useSelector(state => state.study.wordsObj[state.study.stage]);
  const stage = useSelector(state => state.study.stage);
  let answerList = useSelector(state => state.study.studyResult.answerList[state.study.stage]);

  const [keywords, setKeywords] = useState(() => {
    let _keywords = [];
    for (let i = 0; i < length; i++) {
      let id = shortid.generate();
      let text = english[i];
      _keywords.push({ id, text });
    }
    return _keywords;
  });
  const [newKeywords, setNewKeywords] = useState([]); //answerList 배열

  answerList = newKeywords; //store에 답변 리스트 저장

  // React.useEffect(()=>{
  //   setKeywords()
  // },[english])

  //shortid를 이용하여 id값을 랜덤으로 넣어서 배열을 새로 만듦
  // while (keywords.length + newKeywords.length < length) {
  const location = useLocation();

  //영작 칸에 띄울 단어 배열
  const insertButton = id => {
    setNewKeywords(newKeywords.concat(keywords.filter(keyword => keyword.id == id)));
    setKeywords(keywords.filter(keyword => keyword.id !== id));
  };

  //영작 칸에서 클릭한 버튼의 배열 제거
  const removeButton = id => {
    setKeywords(keywords.concat(newKeywords.filter(keyword => keyword.id == id)));
    setNewKeywords(newKeywords.filter(keyword => keyword.id !== id));
  };

  //콘솔창
  console.log(keywords);
  console.log(newKeywords);
  console.log(stage);
  console.log(answerList);

  //스테이지 증가
  const onIncreaseStage = () => {
    dispatch(studySlice.actions.increaseStage());
    dispatch(studySlice.actions.setStudyResult());

    if (stage == 10) {
      //정답 확인 버튼 10번 눌렀을 때 gradeStudy 함수 호출
      gradeStudy();
    }
  };

  //store에 stage 확인 콘솔 창
  //console.log(store.getState());

  React.useLayoutEffect(() => {}, []);

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
      <MainContainer>
        <article>
          <div className={style.container}>
            <ProgressBar />

            <div className={style.question_container}>
              <div className={style.question_text}>
                <Text size="H4" content={'다음 문장을 번역하세요.'} />
              </div>
              <Text size="S" content={korean} />
            </div>

            <div className={style.input_box_container}>
              <div className={style.input_box}>
                <Button keywords={newKeywords} onClick={removeButton} />
              </div>
              <div className={style.input_box}></div>
            </div>

            <div className={style.button_keyword_container}>
              <div className={style.button_default_container}>
                <Button keywords={keywords} onClick={insertButton} />
              </div>
            </div>
          </div>
          <GradingButton content="정답 확인하기" isDisabled={keywords.length > 0} onClick={onIncreaseStage} />
          <Empty size="1rem" />
        </article>
      </MainContainer>
    </>
  );
}

export default ClickEng;
