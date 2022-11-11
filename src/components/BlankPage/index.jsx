import React from 'react';
import { useSelector } from 'react-redux';
import { Text, Empty } from '../../components/element';

import { QuestionContainer } from '..';
import style from './index.module.css';
import Sentence from './sentences/Sentence';

function BlankPage({ LifeState, sentences, setSentences, engSplit, createSentence }) {
  const { korean, english, blankIndex, clause } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  const { stage } = useSelector(state => state.game);

  React.useLayoutEffect(() => {
    setSentences(() => createSentence());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  //console.log(sentences);

  return (
    <>
      <QuestionContainer content={korean} />
      <div>
        <Sentence sentences={sentences} />
      </div>
      <LifeState />
    </>
  );
}

export default BlankPage;
