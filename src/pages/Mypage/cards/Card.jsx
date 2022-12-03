import style from './index.module.css';
import { ProgressBar1 } from '../../../components';
import { Text, Empty, Button } from '../../../components/element';
import { ReactComponent as BarChart } from '../../../assets/icons/Bar chart.svg';

export const Card = () => {
  return (
    <div className={style.card_wrapper}>
      <Text size="H4" color="black" content="1.여행" />
      <div style={{ width: '100%', marginTop: '-3.4rem', marginBottom: '-1rem' }}>
        <ProgressBar1 />
      </div>
      <Text size="B1" content="최고 점수: " />
      <div className={style.set_icon}></div>
      <div className={style.chart_wrapper}>
        <BarChart />
        <div>순위보기</div>
      </div>
      <div className={style.innerbutton}>시작하기</div>
    </div>
  );
};
