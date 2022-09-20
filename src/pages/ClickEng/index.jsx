import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { studySlice } from '../../store/slices/study';
import uuid from 'react-uuid';

import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import style from './index.module.css';
import { Text } from '../../components/element';
import ProgressBar from '../../components/progressbar';
import Button from './buttons/Button';
import { GradingButton } from '../../components/element';
import store from '../../store';

function ClickEng() {
  const dispatch = useDispatch();
  const {english, korean} = useSelector((state) => state.study.wordsObj[0]); //[state.study.stage]
  const {answerList} = useSelector((state) => state.study.studyResult);
  let idx = -1;

  // [@지은님] words이용하시면 됩니답. 콘솔보면서 작업하세요~
  // 버튼 누를 때마다 정답결과 스토어에 업로드되게 해주시고, increaseStage이용해서 작업해주세욥 -> 모르시겠으면 제가 하겠습니다
  console.log('english : ', english); // 완료되면 지우셔도 되세요~
  console.log('answer : ', answerList);

  const location = useLocation();

  //영작 칸에 띄울 단어 배열
  //filter를 통해 클릭한 컴포넌트의 id가 일치하는 keyword 값이 담긴 새로운 배열 반환
  //concat을 통해 새로 만든 배열과 기존 newKeywords 배열 합치기
  const insertButton = id => {
    //바꾼 코드
    dispatch(answerList.concat(english.filter(array => array.id == id)));
    dispatch(english.filter(array => array.id !== id));

    //원래 코드
    //setNewKeywords(newKeywords.concat(keywords.filter(keyword => keyword.id == id)));
    //setKeywords(keywords.filter(keyword => keyword.id !== id));
  };

  //영작 칸에서 클릭한 버튼의 배열 제거
  const removeButton = id => {
    dispatch(english.concat(answerList.filter(array => array.id == id)));
    dispatch(answerList.filter(array => array.id !== id));
    //setKeywords(keywords.concat(newKeywords.filter(keyword => keyword.id == id)));
    //setNewKeywords(newKeywords.filter(keyword => keyword.id !== id));
  };

  //스테이지 증가
  const onIncreaseStage = () => {
    dispatch(studySlice.actions.increaseStage());
    dispatch(studySlice.actions.setStudyResult()); 

    //store 확인 콘솔창
    console.log(store.getState());
  };

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
                <Text size="H3" content={'다음 문장을 번역하세요.'} />
              </div>
              <Text size="S" content={korean} />
            </div>

            <div className={style.input_box_container}>
              <div className={style.input_box}>
                <Button array={answerList} idx={idx} onClick={removeButton} />
              </div>
              <div className={style.input_box}></div>
            </div>

            <div className={style.button_keyword_container}>
              <div className={style.button_default_container}>
                <Button array={english} idx={idx} onClick={insertButton} />
              </div>
            </div>
          </div>
          <GradingButton style={{ marginBottom: '1rem' }} content="정답 확인하기" onClick={onIncreaseStage} />
        </article>
      </MainContainer>
    </>
  );
}

export default ClickEng;
