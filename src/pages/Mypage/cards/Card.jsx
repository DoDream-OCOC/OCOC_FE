import style from './index.module.css';
import { useModal } from '../../../hooks';

import { ProgressBar1, Turtle } from '../../../components';
import { Text, MyPageStartButton } from '../../../components/element';
import ChartModal from '../modal';
import { ReactComponent as BarChart } from '../../../assets/icons/Bar chart.svg';

export const Card = ({ title, highScore, onBtnClick, isLock = false, svg }) => {
  const { Modal, openModal, closeModal } = useModal();
  return (
    <>
      <Modal>
        <ChartModal closeModal={closeModal} />
      </Modal>
      <div className={style.card_wrapper}>
        <Text size="H4" color="black" content={title} />
        <div style={{ width: '100%', marginTop: '-3.4rem', marginBottom: '-1rem' }}>
          <ProgressBar1 value={0} />
        </div>
        <Text size="B1" content={`최고 점수: ${highScore}`} />
        <div className={style.set_icon}></div>
        {/* [Error] openModal 리렌더링 에러 */}
        <div className={style.chart_wrapper} onClick={() => openModal()}>
          <BarChart />
          <div>순위보기</div>
        </div>
        <MyPageStartButton isDisabled={isLock} onClick={onBtnClick} content={!isLock ? '시작하기' : '이전 세트를 먼저 클리어해야 합니다!'} />
      </div>
    </>
  );
};
