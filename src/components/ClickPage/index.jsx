import React from 'react';
import { useSelector } from 'react-redux';
import { useKeywords } from '../../hooks';

import { ProgressBar1, QuestionContainer, ButtonContainer } from '../../components';
import Button from './buttons/Button';
import style from './index.module.css';

function ClickPage() {
  const { korean } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  const { stage } = useSelector(state => state.game);
  const { keywords, setKeywords, newKeywords, createKeywordsId, insertButton, removeButton, isCrtAns, TimerUI, LifeState } = useKeywords();

  React.useLayoutEffect(() => {
    setKeywords(() => createKeywordsId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  return (
    <>
      <div className={style.container}>
        <ProgressBar1 value={(stage - 1) * 10} />
        <TimerUI />
        <div className={style.relative}>
          <QuestionContainer content={korean} />
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
      </div>
    </>
  );
}

export default ClickPage;
