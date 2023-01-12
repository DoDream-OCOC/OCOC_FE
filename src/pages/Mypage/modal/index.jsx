import React from 'react';
import Profile from './Profie';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { score } from '../../../apis';
import Ranking from './Ranking';
import { decodeJWT } from '../../../utils/decodeJWT';
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
  const s = useSelector(state => state.sign);
  const [scoreObj, setScoreObj] = React.useState({ topRanks: [], speed: 0 });
  const [userName, setUserName] = React.useState('');
  React.useEffect(() => {
    mutation.mutate(set);
    setUserName(decodeJWT(s.X_AUTH_REFRESH_TOKEN).sub.split('@')[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={style.modal_wrapper}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Clear style={{ margin: '10px' }} onClick={closeModal} />
        </div>
        <div style={{ margin: '0rem 1rem 2rem 1rem' }}>
          <Profile userName={userName} highScore={highScore} speed={scoreObj.speed} />
          <Ranking rank="MY" id={userName} score={highScore} />
          <Ranking rank="1" id={scoreObj.topRanks[0]?.username} score={scoreObj.topRanks[0]?.bestScore} />
          <Ranking rank="2" id={scoreObj.topRanks[1]?.username} score={scoreObj.topRanks[1]?.bestScore} />
          <Ranking rank="3" id={scoreObj.topRanks[2]?.username} score={scoreObj.topRanks[2]?.bestScore} />
        </div>
      </div>
    </>
  );
}

export default ChartModal;
