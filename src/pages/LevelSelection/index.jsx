import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { study } from '../../apis/index';

import NavBar from '../../components/navbar';
import MainContainer from '../../components/container/main';
import { LevelSelectionBtn } from './Button';
import { Empty, Text } from '../../components/element';
import { ReactComponent as Level1 } from '../../assets/icons/Directions run.svg';
import { ReactComponent as Level2 } from '../../assets/icons/Directions bike.svg';
import { ReactComponent as Level3 } from '../../assets/icons/Two wheeler.svg';

import styled from './index.module.css';


function LevelSelection() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: data => study.sendStudyType(data),
    onSuccess: () => navigate('/click-eng'),
  });

  const onClick = level => {
    // [Temp]  studyType = 'click'
    mutation.mutate(level, 'click');
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
            <LevelSelectionBtn SvgImg={Level1} onClick={onClick} isLoading={mutation.isLoading} title="초급" content="3~5개 단어 클릭 영작" />
            <LevelSelectionBtn SvgImg={Level2}onClick={onClick} isLoading={mutation.isLoading} title="중급" content="6~10개 단어 클릭 영작" />
            <LevelSelectionBtn SvgImg={Level3}onClick={onClick} isLoading={mutation.isLoading} title="고급" content="11~15개 단어 클릭 영작" />
          </div>
          <Empty size="3.2rem" />
        </article>
      </MainContainer>
    </>
  );
}

export default LevelSelection;
