import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from './Card';

const Carousel = ({ openModal }) => {
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
        {/* [Todo] isLock을 통해 비활성화 작업하기 */}
        <Card title="1. 여행" openModal={openModal} highScore={10} isLock={false} />
        <Card title="2. 음식" openModal={openModal} highScore={20} isLock={false} />
        <Card title="3. 예약" openModal={openModal} highScore={30} isLock={false} />
        <Card title="4. 구매" openModal={openModal} highScore={40} isLock={true} />
      </Slider>
    </div>
  );
};

export default Carousel;
