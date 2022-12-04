import React from 'react';
import Profile from './Profie';
import Ranking from './Ranking';
import { ReactComponent as Clear } from '../../../assets/icons/Clear.svg';
import style from './index.module.css';

function ChartModal({ closeModal }) {
  // const fetchRanks = async () => {
  //   try {
  //     // 요청이 시작 할 때에는 error 와 users 를 초기화하고
  //     setError(null);
  //     setRanks(null);
  //     // loading 상태를 true 로 바꿉니다.
  //     setLoading(true);
  //     const response = await axios.get('https://server.ococ.kr/score/rank');
  //     setRanks(response.data); // 데이터는 response.data 안에 들어있습니다.
  //   } catch (e) {
  //     setError(e);
  //   }
  //   setLoading(false);
  // };

  // useLayoutEffect(() => {
  //   fetchRanks();
  // }, []);

  // useEffect(() => {
  //   console.log(ranks?.data);
  // }, [ranks]);
  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;

  // 백엔드 연동되면
  // return (
  //   <>
  //     <div>
  //       <Profile />
  //       <Ranking rank="MY" id="test" score="12344" />
  //       <Ranking rank="1" id={ranks?.data[0].username} score={ranks?.data[0].bestScore} />
  //       <Ranking rank="2" id={ranks?.data[1].username} score={ranks?.data[1].bestScore} />
  //       <Ranking rank="3" id={ranks?.data[2].username} score={ranks?.data[2].bestScore} />
  //     </div>
  //   </>
  // );
  return (
    <>
      <div className={style.modal_wrapper}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Clear style={{ margin: '10px' }} onClick={closeModal} />
        </div>
        <div style={{ margin: '0rem 1rem 2rem 1rem' }}>
          <Profile />
          <Ranking rank="MY" id="test" score="12344" />
          <Ranking rank="1" id={0} score={0} />
          <Ranking rank="2" id={0} score={0} />
          <Ranking rank="3" id={0} score={0} />
        </div>
      </div>
    </>
  );
}

export default ChartModal;
