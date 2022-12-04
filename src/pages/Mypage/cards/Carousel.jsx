import React from 'react';
import { useMutation } from 'react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from './Card';
import ChartModal from '../modal';
import { ReactComponent as TurtleTravel } from '../../../assets/icons/turtleTravel.svg';
import { ReactComponent as TurtleCook } from '../../../assets/icons/turtleCook.svg';
import { ReactComponent as TurtleShopping } from '../../../assets/icons/turtleShopping.svg';
import { ReactComponent as TurtleReservation } from '../../../assets/icons/turtleReservation.svg';

const Carousel = ({ curLevel }) => {
  const mutation = useMutation({ mutationFn: async query => {}, onSuccess: () => {} });
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: false,
    vertical: false,
    slidesToShow: 1,
    arrow: true,
    variableWidth: true,
    adaptiveHeight: true,
    centerPadding: '40px',
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {/* [Todo] highScore랑 isLock 합쳐서 객체로 관리하기 */}
        <Card title="1. 여행" openModal={openModal} onBtnClick={mutation.mutate('여행')} highScore={10} isLock={1 > curLevel} svg={<TurtleTravel />} />
        <Card title="2. 음식" openModal={openModal} onBtnClick={mutation.mutate('음식')} highScore={20} isLock={2 > curLevel} svg={<TurtleCook />} />
        <Card title="3. 예약" openModal={openModal} onBtnClick={mutation.mutate('예약')} highScore={30} isLock={3 > curLevel} svg={<TurtleReservation />} />
        <Card title="4. 구매" openModal={openModal} onBtnClick={mutation.mutate('구매')} highScore={40} isLock={4 > curLevel} svg={<TurtleShopping />} />
      </Slider>
    </div>
  );
};

export default Carousel;
