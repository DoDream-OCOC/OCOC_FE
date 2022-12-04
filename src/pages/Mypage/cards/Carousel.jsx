import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from './Card';

const Carousel = () => {
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
        <Card title="1. ?" />
        <Card title="2. ?" />
        <Card title="3. ?" />
        <Card title="4. ?" />
      </Slider>
    </div>
  );
};

export default Carousel;
