import React from 'react';
import { useSelector } from 'react-redux';
import { useKeywords } from '../../hooks';

import { ProgressBar1, QuestionContainer, ButtonContainer } from '../../components';
import Button from './buttons/Button';
import style from './index.module.css';

function ClickPage({ keywords, setKeywords, newKeywords, createKeywordsId, insertButton, removeButton, isCrtAns, TimerUI, LifeState, CrtAnswerUI }) {
  const { korean } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  const { stage } = useSelector(state => state.game);

  React.useLayoutEffect(() => {
    setKeywords(() => createKeywordsId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  return (
    <>
      <div className={style.relative}>
        <QuestionContainer content={korean} />
        <CrtAnswerUI />
        <ButtonContainer />
        <div className={style.absolute}>
          <Button isCorrect={isCrtAns} keywords={newKeywords} onClick={removeButton} />
        </div>
      </div>
      <LifeState />
      <div className={style.button_keyword_container}>
        <div className={style.button_default_container}>
          <Button isCorrect={isCrtAns} keywords={keywords} onClick={insertButton} />
        </div>
      </div>
    </>
  );
}

export default ClickPage;
