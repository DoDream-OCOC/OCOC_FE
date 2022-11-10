import React from 'react';
import { useSelector } from 'react-redux';
import { Text, Empty } from '../../components/element';

import { QuestionContainer } from '..';
import style from './index.module.css';

function BlankPage({ LifeState }) {
  const { korean, english, blankIndex, clause } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  const { stage } = useSelector(state => state.game);
  const [sentence, setSentence] = React.useState();
  const engSplit = english.split(' '); //english 띄어쓰기 기준으로 나눈 배열

  //sentence에 빈칸 뚫기
  const createSentence = () => {
    let _sentence = '';
    for (let i = 0; i < clause; i++) {
      //임시로 해놨는데 i === blankIndex으로 수정
      if (i === blankIndex + 2) {
        _sentence += ' _______ ';
      } else {
        _sentence += engSplit[i] + ' ';
      }
    }
    return _sentence;
  };

  //sentence useState에 넣기
  React.useLayoutEffect(() => {
    setSentence(() => createSentence());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  console.log(sentence);

  return (
    <>
      <QuestionContainer content={korean} />
      <Text size="M" content={sentence} />
      <LifeState />
    </>
  );
}

export default BlankPage;
