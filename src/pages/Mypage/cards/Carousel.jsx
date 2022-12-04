import React from 'react';
import { useMutation } from 'react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from './Card';
import ChartModal from '../modal';
import turtleTravel from '../../../assets/icons/turtleTravel.png';
import turtleCook from '../../../assets/icons/turtleCook.png';
import turtleShopping from '../../../assets/icons/turtleShopping.png';
import turtleReservation from '../../../assets/icons/turtleReservation.png';

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
        <Card title="1. 여행" onBtnClick={mutation.mutate('여행')} highScore={10} isLock={1 > curLevel} iconPng={turtleTravel} />
        <Card title="2. 음식" onBtnClick={mutation.mutate('음식')} highScore={20} isLock={2 > curLevel} iconPng={turtleCook} />
        <Card title="3. 예약" onBtnClick={mutation.mutate('예약')} highScore={30} isLock={3 > curLevel} iconPng={turtleReservation} />
        <Card title="4. 구매" onBtnClick={mutation.mutate('구매')} highScore={40} isLock={4 > curLevel} iconPng={turtleShopping} />
      </Slider>
    </div>
  );
};

export default Carousel;
