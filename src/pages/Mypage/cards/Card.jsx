import style from './index.module.css';
import { ProgressBar1 } from '../../../components';
import { Text, Empty, Button } from '../../../components/element';
import { ReactComponent as BarChart } from '../../../assets/icons/Bar chart.svg';

import { useModal } from '../../../hooks';
import ChartModal from '../modal';
import { func } from 'prop-types';

export const Card = ({ title }) => {
  const { Modal, openModal } = useModal(ChartModal);

  const ShowModal = () => {
    return (
      <>
        <Modal>
          <ChartModal />
        </Modal>
      </>
    );
  };

  return (
    <div className={style.card_wrapper}>
      <Text size="H4" color="black" content={title} />
      <div style={{ width: '100%', marginTop: '-3.4rem', marginBottom: '-1rem' }}>
        <ProgressBar1 value={0} />
      </div>
      <Text size="B1" content="최고 점수: {...}" />
      <div className={style.set_icon}></div>
      <div className={style.chart_wrapper} onClick={openModal}>
        <BarChart />
        <div>순위보기</div>
      </div>
      <div className={style.innerbutton}>시작하기</div>
    </div>
  );
};
