import React from 'react';
import Profile from './Profie';
import { useMutation } from 'react-query';
import { score } from '../../../apis';
import Ranking from './Ranking';
import { ReactComponent as Clear } from '../../../assets/icons/Clear.svg';
import style from './index.module.css';

function ChartModal({ set, closeModal, highScore }) {
  const mutation = useMutation({
    mutationFn: async setType => {
      // [...] highScore을 여기서 요청하는게 맞았을까
      const resObj = {};
      await score.getScoreRank(setType).then(res => (resObj.topRanks = res));
      await score.getScoreSpeed(setType).then(res => (resObj.speed = res));
      return resObj;
    },
    onSuccess: res => setScoreObj(res),
  });
  const [scoreObj, setScoreObj] = React.useState({ topRanks: [], speed: 0 });
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
  React.useEffect(() => {
    mutation.mutate(set);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={style.modal_wrapper}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Clear style={{ margin: '10px' }} onClick={closeModal} />
        </div>
        <div style={{ margin: '0rem 1rem 2rem 1rem' }}>
          <Profile highScore={highScore} speed={scoreObj.speed} />
          <Ranking rank="MY" id="test" score={highScore} />
          <Ranking rank="1" id={scoreObj.topRanks[0]?.username} score={scoreObj.topRanks[0]?.bestScore} />
          <Ranking rank="2" id={scoreObj.topRanks[1]?.username} score={scoreObj.topRanks[1]?.bestScore} />
          <Ranking rank="3" id={scoreObj.topRanks[2]?.username} score={scoreObj.topRanks[2]?.bestScore} />
        </div>
      </div>
    </>
  );
}

export default ChartModal;
