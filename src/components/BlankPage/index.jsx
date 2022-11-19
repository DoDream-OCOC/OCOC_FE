import React from 'react';
import { useSelector } from 'react-redux';
import { Text, Empty } from '../../components/element';

import { QuestionContainer } from '../../components';
import style from './index.module.css';
import Sentence from './sentences/Sentence';

function BlankPage({ LifeState, sentences, setSentences, createSentence, blankText, onChange, CrtAnswerUI }) {
  const { korean } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  const { stage } = useSelector(state => state.game);

  React.useLayoutEffect(() => {
    setSentences(() => createSentence());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  return (
    <>
      <QuestionContainer content={korean} />
      <CrtAnswerUI />
      <div>
        <Sentence sentences={sentences} blankText={blankText} onChange={onChange} />
      </div>
      <LifeState />
    </>
  );
}

export default BlankPage;
