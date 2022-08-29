import React from 'react';

import MainHeader from '../../components/header/main';
import MainContainer from '../../components/container/main';
import { LevelSelectionBtn } from './Button';
import { Empty, Text } from '../../components/element';

function LevelSelection() {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <article className="">
          <div style={{ width: '95%' }}>
            <Text size="M-Bold" content="학습 레벨을 선택해주세요." style={{ textAlign: 'left', marginLeft: '0.5rem' }} />
          </div>
          <Empty size="3.2rem" />
          <LevelSelectionBtn title="초급" content="3~5개 단어 클릭 영작" />
          <LevelSelectionBtn title="중급" content="6~10개 단어 클릭 영작" />
          <LevelSelectionBtn title="고급" content="11~15개 단어 클릭 영작" />
          <Empty size="3.2rem" />
        </article>
      </MainContainer>
    </>
  );
}

export default LevelSelection;
