import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Profile, Ranking } from './cards';

function Popup() {
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

  return (
    <>
      <Ranking rank="MY" id="test" score="12344" />
      <Ranking rank="1" id={ranks?.data[0].username} score={ranks?.data[0].bestScore} />
      <Ranking rank="2" id={ranks?.data[1].username} score={ranks?.data[1].bestScore} />
      <Ranking rank="3" id={ranks?.data[2].username} score={ranks?.data[2].bestScore} />
    </>
  );
}
