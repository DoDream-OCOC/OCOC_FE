import React from 'react';
import { useSelector } from 'react-redux';
import { ClickPage, BlankPage } from '../../components';

function Page({ keywords, setKeywords, newKeywords, createKeywordsId, insertButton, removeButton, isCrtAns, LifeState }) {
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
        />
      </>
    );
  } else {
    return (
      <>
        <BlankPage
          keywords={keywords}
          setKeywords={setKeywords}
          newKeywords={newKeywords}
          createKeywordsId={createKeywordsId}
          insertButton={insertButton}
          removeButton={removeButton}
          isCrtAns={isCrtAns}
          LifeState={LifeState}
        />
      </>
    );
  }
}

export default Page;
