import React from 'react';
import { useSelector } from 'react-redux';
import { ClickPage, BlankPage } from '../../components';

function Page({
  keywords,
  setKeywords,
  newKeywords,
  createKeywordsId,
  insertButton,
  removeButton,
  isCrtAns,
  LifeState,
  blankText,
  onChange,
  CrtAnswerUI,
  fadeInOut,
  sentences,
  setSentences,
  createSentence,
}) {
  const { questionType } = useSelector(state => state.game.datasets[state.game.stage - 1]);

  if (questionType === 'CLICK') {
    return (
      <>
        <ClickPage
          keywords={keywords}
          setKeywords={setKeywords}
          newKeywords={newKeywords}
          createKeywordsId={createKeywordsId}
          insertButton={insertButton}
          removeButton={removeButton}
          isCrtAns={isCrtAns}
          LifeState={LifeState}
          CrtAnswerUI={CrtAnswerUI}
          fadeInOut={fadeInOut}
        />
      </>
    );
  } else {
    return (
      <>
        <BlankPage
          keywords={keywords}
          sentences={sentences}
          setKeywords={setKeywords}
          newKeywords={newKeywords}
          createKeywordsId={createKeywordsId}
          insertButton={insertButton}
          removeButton={removeButton}
          createSentence={createSentence}
          setSentences={setSentences}
          isCrtAns={isCrtAns}
          LifeState={LifeState}
          blankText={blankText}
          onChange={onChange}
          CrtAnswerUI={CrtAnswerUI}
        />
      </>
    );
  }
}

export default Page;
