import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { study } from '../../apis/index';

import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import { LevelSelectionBtn } from './Button';
import { Empty, Text } from '../../components/element';

import styled from './index.module.css';

function LevelSelection() {
  const mutation = useMutation({
    mutationFn: data => study.sendStudyType(data),
  });
  const navigate = useNavigate();

  const onClick = level => {
    // [Temp]  studyType = 'click'
    mutation.mutate(level, 'click');
    navigate('/click-eng');
  };

  // 로딩중일 때 컴포넌트 추가해주기

  return (
    <>
      <NavBar />
      <MainContainer>
        <article className="">
          <div style={{ width: '95%' }}>
            <Text size="H4" content="학습 레벨을 선택해주세요." style={{ textAlign: 'left', marginLeft: '0.5rem' }} />
          </div>
          <Empty size="3.2rem" />
          <div className={styled.flexDirection}>
            <LevelSelectionBtn onClick={onClick} title="초급" content="3~5개 단어 클릭 영작" />
            <LevelSelectionBtn onClick={onClick} title="중급" content="6~10개 단어 클릭 영작" />
            <LevelSelectionBtn onClick={onClick} title="고급" content="11~15개 단어 클릭 영작" />
          </div>
          <Empty size="3.2rem" />
        </article>
      </MainContainer>
    </>
  );
}

export default LevelSelection;
