import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/navbar';
import ProgressBar1 from '../../components/progressbar';
import MainContainer from '../../components/container/main';
import { Profile, Ranking } from './cards';
import { Empty, Button, Text } from '../../components/element';
import style from './index.module.css';

import Lottie from 'lottie-react';
import cloud_bg from '../../assets/OCOC/Cloud_background.json';

import axios from 'axios';
// 98 브랜치 머지 이슈 테스트

function Mypage() {
  const navigate = useNavigate();
  const [ranks, setRanks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRanks = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setRanks(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get('https://server.ococ.kr/score/rank');
      setRanks(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useLayoutEffect(() => {
    fetchRanks();
  }, []);

  useEffect(() => {
    console.log(ranks?.data);
  }, [ranks]);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.

  return (
    <>
      <Navbar />
      <MainContainer>
        <Profile />
        <Empty size="2rem" />
        <section>
          <ProgressBar1 />
        </section>
        <section style={{ marginTop: '4rem' }}>
          <Button onClick={() => navigate('')} content="시작하기" />
        </section>
        <section>
          <Empty size="2rem" />
          <Text size="H3" content="랭킹" />
          <Empty size="0.5rem" />
        </section>
        <Ranking rank="MY" id="test" score="12344" />
        <Ranking rank="1" id={ranks?.data[0].username} score={ranks?.data[0].bestScore} />
        <Ranking rank="2" id={ranks?.data[1].username} score={ranks?.data[1].bestScore} />
        <Ranking rank="3" id={ranks?.data[2].username} score={ranks?.data[2].bestScore} />
      </MainContainer>
    </>
  );
}

export default Mypage;
