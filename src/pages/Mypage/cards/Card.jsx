import style from './index.module.css';
import { useMutation } from 'react-query';
import { ProgressBar1 } from '../../../components';
import { Text, MyPageStartButton } from '../../../components/element';
import { ReactComponent as BarChart } from '../../../assets/icons/Bar chart.svg';

export const Card = ({ title, highScore, openModal, isLock = false }) => {
  const mutation = useMutation({ mutationFn: async query => {}, onSuccess: () => {} });
  const query = title
    .split('')
    .filter((_, i) => i >= 3)
    .join('');
  return (
    <div className={style.card_wrapper}>
      <Text size="H4" color="black" content={title} />
      <div style={{ width: '100%', marginTop: '-3.4rem', marginBottom: '-1rem' }}>
        <ProgressBar1 value={0} />
      </div>
      <Text size="B1" content={`최고 점수: ${highScore}`} />
      <div className={style.set_icon}></div>
      <div className={style.chart_wrapper} onClick={openModal}>
        <BarChart />
        <div>순위보기</div>
      </div>
      <MyPageStartButton isDisabled={isLock} onClick={() => mutation.mutate(query)} content={!isLock ? '시작하기' : '이전 세트를 먼저 클리어해야 합니다!'} />
    </div>
  );
};
