import React from 'react';
import { useMutation } from 'react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from './Card';

const Carousel = ({ openModal }) => {
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
        <Card title="1. 여행" openModal={openModal} onBtnClick={mutation.mutate('여행')} highScore={10} isLock={false} />
        <Card title="2. 음식" openModal={openModal} onBtnClick={mutation.mutate('음식')} highScore={20} isLock={false} />
        <Card title="3. 예약" openModal={openModal} onBtnClick={mutation.mutate('예약')} highScore={30} isLock={false} />
        <Card title="4. 구매" openModal={openModal} onBtnClick={mutation.mutate('구매')} highScore={40} isLock={true} />
      </Slider>
    </div>
  );
};

export default Carousel;
